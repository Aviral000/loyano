"use client";

import { motion } from "framer-motion";
import { QuickReply } from "./types";

interface QuickRepliesProps {
  replies: QuickReply[];
  onReply: (action: string) => void;
}

export default function QuickReplies({ replies, onReply }: QuickRepliesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex flex-col gap-3 items-end self-end w-full pt-2"
    >
      {replies.map((reply) => (
        <motion.button
          key={reply.id}
          onClick={() => onReply(reply.action)}
          className="w-full text-center py-3 px-4 rounded-full bg-zinc-700/50 hover:bg-zinc-700/80 text-white transition-all duration-300 quick-reply"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            boxShadow: '0 0 15px rgba(192, 132, 252, 0.4), 0 0 5px rgba(255, 255, 255, 0.6)'
          }}
        >
          {reply.text}
        </motion.button>
      ))}
    </motion.div>
  );
}
