"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useChatbotStore } from "./useChatbotStore";

interface InputFieldProps {
  type: 'text' | 'email' | 'password' | 'tel';
  placeholder: string;
  onSubmit: (value: string) => void;
  validation?: (value: string) => boolean | string;
}

export default function InputField({ type, placeholder, onSubmit, validation }: InputFieldProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const { userData } = useChatbotStore();

  const handleSubmit = () => {
    if (value.trim() === '') return;

    // Special validation for password confirmation
    if (type === 'password' && placeholder.includes('Confirm')) {
      if (value !== userData.password) {
        setError('Passwords do not match');
        return;
      }
    }

    if (validation) {
      const result = validation(value);
      if (result !== true) {
        setError(typeof result === 'string' ? result : 'Invalid input');
        return;
      }
    }

    onSubmit(value);
    setValue('');
    setError('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative self-end w-full mt-2"
    >
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className={`w-full bg-zinc-800/50 border rounded-lg py-3 pl-4 pr-12 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 transition-all ${
            error 
              ? 'border-red-500 focus:ring-red-500/70' 
              : 'border-zinc-700 focus:ring-purple-500/70'
          }`}
        />
        <motion.button
          onClick={handleSubmit}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 glowing-send"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
