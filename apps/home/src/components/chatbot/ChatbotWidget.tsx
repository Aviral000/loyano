"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useChatbotStore } from "./useChatbotStore";
import { QUICK_REPLIES, ACCOUNT_CREATION_FLOW, EXPLORE_PRODUCTS_FLOW, ASK_QUESTION_FLOW } from "./chatbotData";
import ChatMessage from "./ChatMessage";
import QuickReplies from "./QuickReplies";
import InputField from "./InputField";

export default function ChatbotWidget() {
  const { 
    isOpen, 
    closeChat, 
    messages, 
    currentFlow, 
    currentStep, 
    startFlow, 
    nextStep,
    sendMessage,
    autoCloseCountdown,
    cancelAutoClose 
  } = useChatbotStore();

  const handleQuickReply = (action: string) => {
    switch (action) {
      case 'create-account':
        startFlow(ACCOUNT_CREATION_FLOW);
        break;
      case 'explore':
        startFlow(EXPLORE_PRODUCTS_FLOW);
        break;
      case 'ask':
        startFlow(ASK_QUESTION_FLOW);
        break;
      default:
        break;
    }
  };

  const handleInputSubmit = (value: string) => {
    if (currentFlow) {
      nextStep(value);
    } else {
      sendMessage(value);
    }
  };

  const showQuickReplies = !currentFlow && messages.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-8 right-8 z-40 w-[400px] h-[700px] flex flex-col glassmorphism rounded-2xl shadow-2xl pointer-events-auto"
          style={{
            boxShadow: '0 0 40px rgba(128, 90, 213, 0.2), 0 0 80px rgba(128, 90, 213, 0.1)'
          }}
        >
          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-white">LOYANO AI Assistant</h2>
              <span className="text-xl text-white sparkle-icon">✨</span>
              {autoCloseCountdown > 0 && (
                <div className="ml-auto flex items-center gap-2 text-sm text-zinc-400">
                  <span>Closing in</span>
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-300 font-bold">
                    {autoCloseCountdown}
                  </div>
                  <motion.button
                    onClick={cancelAutoClose}
                    className="text-xs text-purple-400 hover:text-purple-300 underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    Stay Open
                  </motion.button>
                </div>
              )}
            </div>
            <motion.button
              onClick={closeChat}
              className="text-zinc-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </header>

          {/* Chat Body */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto" id="chat-body">
            {/* Initial Greeting */}
            {showQuickReplies && (
              <div className="flex flex-col gap-4 chat-bubble" id="initial-greeting">
                <div 
                  className="p-4 rounded-xl bg-gradient-to-br from-zinc-800/60 to-zinc-900/70 max-w-[90%] self-start"
                  style={{ border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <p className="text-zinc-200">
                    Ciao 👋 Welcome to LOYANO. I can help you create your account, explore collections, or answer your questions.
                  </p>
                </div>
                <QuickReplies replies={QUICK_REPLIES} onReply={handleQuickReply} />
              </div>
            )}

            {/* Messages */}
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>

            {/* Input Field for Current Step */}
            {currentFlow && currentStep < currentFlow.steps.length && (
              <InputField
                type={currentFlow.steps[currentStep].type}
                placeholder={currentFlow.steps[currentStep].placeholder}
                onSubmit={handleInputSubmit}
                validation={currentFlow.steps[currentStep].validation}
              />
            )}
          </div>

          {/* Input Area */}
          {!currentFlow && (
            <div className="p-4 border-t border-white/10 flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-3 pl-4 pr-12 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 transition-all"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const input = e.target as HTMLInputElement;
                      if (input.value.trim()) {
                        sendMessage(input.value);
                        input.value = '';
                      }
                    }
                  }}
                />
                <motion.button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 glowing-send"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
