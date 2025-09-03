# backend.py
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from httpcore import request
from pydantic import BaseModel
from typing import Any, List, Optional

from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA
from langchain_core.prompts import PromptTemplate
from langchain_core.language_models import LLM
from huggingface_hub import InferenceClient

# -----------------------------
# Environment Variables
# -----------------------------
HF_TOKEN = os.getenv("HF_TOKEN", "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")  # Replace with your HF token
DB_FAISS_PATH = "vectorstore/astrology_db_faiss"

# -----------------------------
# FastAPI App + CORS
# -----------------------------
app = FastAPI()
origins = [
    "http://localhost:3000",  # your React dev server
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins="**",      # allow your frontend
    allow_credentials=True,
    allow_methods=["*"],        # allow POST, OPTIONS, GET etc
    allow_headers=["*"],        # allow all headers
)

# -----------------------------
# Pydantic Model for Requests
# -----------------------------
class QueryRequest(BaseModel):
    query: str

# -----------------------------
# Custom HuggingFace LLM
# -----------------------------
class HuggingFaceLLM(LLM):
    client: Any
    model: str

    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        response = self.client.chat_completion(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=512,
            temperature=0.5
        )
        return response.choices[0].message["content"]

    @property
    def _identifying_params(self):
        return {"model": self.model}

    @property
    def _llm_type(self):
        return "huggingface_mistral"

# -----------------------------
# Load FAISS Embeddings
# -----------------------------
embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = FAISS.load_local(DB_FAISS_PATH, embedding_model, allow_dangerous_deserialization=True)

# -----------------------------
# Load HuggingFace LLM Client
# -----------------------------
client = InferenceClient(model="mistralai/Mistral-7B-Instruct-v0.3", token=HF_TOKEN)
llm = HuggingFaceLLM(client=client, model="mistralai/Mistral-7B-Instruct-v0.3")

# -----------------------------
# Custom Prompt Template
# -----------------------------
CUSTOM_PROMPT_TEMPLATE = """
Tum ek Astrology expert ho.
Agar question astrology se related nahi hai, to seedha kaho "Mujhe nahi pata".
Context: {context}
Question: {question}
Shuru seedhe jawab se karo, small talk avoid karo.
"""
prompt_template = PromptTemplate(template=CUSTOM_PROMPT_TEMPLATE, input_variables=["context", "question"])

# -----------------------------
# Create RetrievalQA Chain
# -----------------------------
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=db.as_retriever(search_kwargs={"k": 3, "fetch_k": 5}),  # fetch more docs
    return_source_documents=True,
    chain_type_kwargs={"prompt": prompt_template},
)

# -----------------------------
# API Route
# -----------------------------
@app.post("/ask")
def ask_question(request: QueryRequest):
    try:
        # QA chain se response le
        response = qa_chain.invoke({"query": request.query})

        # Agar FAISS se koi document nahi mila, tab hi fallback
        astrology_keywords = ["hello","hi","rashi", "jyotish", "graha", "kundali", "rashifal", "nakshatra", "dasha", "astrology"]
        if not any(word in request.query.lower() for word in astrology_keywords):
            answer = "Mujhe nahi pata"

            sources = []
        else:
            answer = response["result"]
            sources = [doc.page_content for doc in response["source_documents"]]

        return {
            "answer": answer,
            "sources": sources
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# -----------------------------
# Health Check
# -----------------------------
@app.get("/")
def read_root():
    return {"message": "AstroBot API is running!"}
