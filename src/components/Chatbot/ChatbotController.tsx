import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWindow from './ChatWindow';

const ChatbotController: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 left-5 z-50 w-[65px] h-[65px] bg-gradient-to-br from-chatbot-start to-chatbot-end rounded-full shadow-lg flex items-center justify-center text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? 'pulseGlow' : {}}
        aria-label="Open AI Chatbot"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/12133/12133597.png"
          alt="AI Chatbot"
          className="w-9 h-9"
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ChatbotController;
