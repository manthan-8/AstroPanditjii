import React, { useState, useRef, useEffect } from 'react';

type Message = {
  text: string;
  sender: 'bot' | 'user';
};

const ChatBotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! 👋 How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setMessages((prev) => [...prev, { text: trimmed, sender: 'user' }]);
      setInput('');

      // Simulate bot reply after a short delay (optional)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `You said: "${trimmed}" 🤖`, sender: 'bot' },
        ]);
      }, 800);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-yellow-400 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 transition"
        >
          💬 <span className="hidden sm:inline">Need help?</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-80 md:w-96 h-[70vh] bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-yellow-400 text-black p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Hi there! 👋</h2>
            <button onClick={toggleChat} className="hover:text-gray-300 text-xl">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm max-w-[70%] ${
                  msg.sender === 'user' ? 'ml-auto text-right' : 'mr-auto text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded focus:outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={sendMessage}
              className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotWidget;
