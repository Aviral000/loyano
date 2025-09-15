"use client";

import { motion } from "framer-motion";
import { ChatMessage as ChatMessageType } from "./types";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.sender === 'ai';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex chat-bubble ${isAI ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`p-4 rounded-xl max-w-[85%] ${
          isAI
            ? 'bg-gradient-to-br from-zinc-800/60 to-zinc-900/70'
            : 'bg-purple-600/50 text-white'
        }`}
        style={isAI ? { border: '1px solid rgba(255,255,255,0.05)' } : {}}
      >
        <p className={isAI ? 'text-zinc-200' : ''}>{message.content}</p>
      </div>
    </motion.div>
  );
}
