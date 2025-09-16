import React from 'react';
import { motion } from 'framer-motion';

export interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
  timestamp: string;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col w-full my-2 ${isUser ? 'items-end' : 'items-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl text-sm md:text-base whitespace-pre-wrap ${
          isUser
            ? 'bg-gradient-to-r from-whatsapp-start to-whatsapp-end text-white rounded-br-lg'
            : 'bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-white rounded-bl-lg'
        }`}
      >
        {message.parts[0].text}
      </div>
      <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 px-1">
        {message.timestamp}
      </div>
    </motion.div>
  );
};

export default MessageBubble;
