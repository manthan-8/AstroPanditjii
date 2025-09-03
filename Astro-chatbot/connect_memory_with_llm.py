import os
from huggingface_hub import InferenceClient
from langchain.chains import RetrievalQA
from langchain_core.prompts import PromptTemplate
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.language_models import LLM
from typing import Any, List, Optional

# 🔑 Load HuggingFace Token
HF_TOKEN = "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"

# ✅ Custom LangChain-compatible HuggingFace LLM
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


def load_llm(HF_TOKEN):
    print(HF_TOKEN)
    client = InferenceClient(token=HF_TOKEN)
    return HuggingFaceLLM(client=client, model="mistralai/Mistral-7B-Instruct-v0.3")


# 🪐 Custom Prompt
CUSTOM_PROMPT_TEMPLATE = """
Tum ek Astrology expert ho. 
Neeche diye gaye context ke basis par user ke sawalon ka jawab do. 
Agar jawab context me nahi hai to seedha kaho "Mujhe nahi pata". 
Answer simple aur user-friendly banao. Jyotish shastra ke terms ka use karo.

Context: {context}
Question: {question}

Shuru seedhe jawab se karo, small talk avoid karo.
"""

def set_custom_prompt(custom_prompt_template):
    return PromptTemplate(template=custom_prompt_template, input_variables=["context", "question"])


# 📂 Load FAISS Database
DB_FAISS_PATH = "vectorstore/db_faiss"
embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = FAISS.load_local(DB_FAISS_PATH, embedding_model, allow_dangerous_deserialization=True)

# 🤝 Create QA Chain
llm = load_llm(HF_TOKEN)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=db.as_retriever(search_kwargs={"k": 2}),
    return_source_documents=True,
    chain_type_kwargs={"prompt": set_custom_prompt(CUSTOM_PROMPT_TEMPLATE)},
)

# 💬 Interactive loop
while True:
    user_query = input("Write Query Here: ")
    if user_query.lower() in ["exit", "quit"]:
        break
    response = qa_chain.invoke({"query": user_query})
    print("Answer:", response["result"])
    print("Source Docs:", response["source_documents"])
