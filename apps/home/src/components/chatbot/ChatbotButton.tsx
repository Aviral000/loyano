"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useChatbotStore } from "./useChatbotStore";

export default function ChatbotButton() {
  const { isOpen, toggleChat } = useChatbotStore();

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.button
        onClick={toggleChat}
        className={`w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg border transition-all duration-300 ${
          isOpen 
            ? 'opacity-0 pointer-events-none' 
            : 'border-purple-500/50 hover:border-purple-400 animate-pulse-glow'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: isOpen 
            ? 'none' 
            : '0 0 20px rgba(192, 132, 252, 0.3), 0 0 40px rgba(192, 132, 252, 0.2)'
        }}
        type="button"
      >
        <Image
          alt="LOYANO Logo"
          width={32}
          height={32}
          className="w-8 h-8"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk68DxCnyDY-waBTEqWn0Uv7EUTZnjrVidfdg-CEGD0L5cdi9DdGTsKjMQudWEQ_CyB6AKEb49zAZHoahT_xz10eeNu6Zu5YVkG_Z66_gOeROiDRFRE9Q8N3zEaD8ifNLuqeP1Ba4r0HmMC3tuU9IBzIWdYIe3cHR_ZrE6E2u9EpmHopTNWXaMDVYcy3WRgw8QwmqJIGkH4jpf-fyMOo58-klhucOkHHLvPNxy0FihHcU8wFZiojgFf_osjYlJCYXqE9FNH_eDBw"
        />
      </motion.button>
    </motion.div>
  );
}
