"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, X } from "lucide-react";
import { TUTORIAL_STEPS } from "@/components/hero/tutorial/tutorialData";

interface CompletionMessageProps {
  countdown: number;
  onSkip: () => void;
  onRestart: () => void;
}

export default function CompletionMessage({ countdown, onSkip, onRestart }: CompletionMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-200/50 p-8 text-center max-w-md">
        <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Tutorial Complete! ✅
        </h3>
        <p className="text-slate-600 mb-4">
          You&apos;ve discovered our premium Italian fabrics with cutting-edge protection technology. 
          Experience the future of luxury wearables.
        </p>
        
        {/* Progress Summary */}
        <div className="bg-amber-50 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-center gap-2 text-amber-800 font-semibold">
            <Check className="w-5 h-5" />
            <span>All {TUTORIAL_STEPS.length}/{TUTORIAL_STEPS.length} steps completed!</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onSkip}
            className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Explore Collection
          </button>
          <button
            onClick={onRestart}
            className="px-4 py-3 border-2 border-amber-300 text-amber-700 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300"
          >
            Restart
          </button>
        </div>
        
        {/* Manual close button */}
        <button
          onClick={onSkip}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Auto-close indicator with countdown */}
        <motion.div 
          key={countdown}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-3"
        >
          <p className="text-xs text-slate-400">
            Auto-closing in <span className="font-bold text-amber-600">{countdown}</span> seconds...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
