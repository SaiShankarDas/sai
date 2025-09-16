import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { startChat } from '../../services/gemini';
import MessageBubble, { Message } from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ top: 0, left: 0, right: 0, bottom: 0 });

  // Calculate drag constraints to keep the window in view
  useLayoutEffect(() => {
    const chatWindow = chatWindowRef.current;
    if (chatWindow) {
      const { innerWidth, innerHeight } = window;
      const { offsetWidth, offsetHeight } = chatWindow;
      setDragConstraints({
        top: -offsetHeight + 100, // Allow dragging up, but not completely out of view
        bottom: innerHeight - 100, // Keep header visible at the bottom
        left: -offsetWidth + 100, // Keep a part visible on the left
        right: innerWidth - 100, // Keep a part visible on the right
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  useEffect(() => {
    // Add initial bot message for UI display only
    setMessages([{
      role: 'model',
      parts: [{ text: "Hi! I'm sAI, your personal AI assistant. How can I help you explore our automation solutions today?" }],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      parts: [{ text: input }],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Construct the API history from the messages state, excluding the initial bot message.
      const apiHistory = messages
        .slice(1) // remove initial bot message
        .map(msg => ({ role: msg.role, parts: msg.parts }));

      const chat = startChat(apiHistory);
      const result = await chat.sendMessage(currentInput);
      const response = result.response;
      const text = response.text();

      const botMessage: Message = {
        role: 'model',
        parts: [{ text }],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (e) {
      console.error(e);
      setError("Sorry, I'm having trouble connecting right now. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/918280565127?text=${encodeURIComponent("Hi! I'd like to continue this chat on WhatsApp.")}`;

  return (
    <motion.div
      ref={chatWindowRef}
      drag
      dragMomentum={false}
      dragConstraints={dragConstraints}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-24 left-5 w-[90vw] h-[80vh] md:w-[400px] md:h-[550px] bg-white/30 dark:bg-black/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 flex flex-col overflow-hidden z-50 cursor-grab active:cursor-grabbing"
    >
      {/* Header */}
      <div className="flex-shrink-0 p-4 bg-gradient-to-r from-chatbot-start to-chatbot-end text-white flex justify-between items-center">
        <h3 className="font-bold text-lg">sAI - Your AI Assistant</h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
        {isLoading && <TypingIndicator />}
        {error && <div className="text-red-500 text-sm text-center p-2">{error}</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0 p-4 border-t border-white/20 dark:border-gray-700/50">
        <div className="flex items-center bg-white/50 dark:bg-gray-900/50 rounded-xl overflow-hidden">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about our services..."
            className="w-full p-3 bg-transparent outline-none text-gray-900 dark:text-white"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-3 text-white bg-gradient-to-r from-chatbot-start to-chatbot-end rounded-lg m-1 disabled:opacity-50 transition-opacity"
          >
            <Send size={20} />
          </button>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/15707/15707820.png" alt="WhatsApp" className="w-4 h-4" />
          Continue on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default ChatWindow;
