"use client";

import { motion } from "framer-motion";
import { X, ChevronRight, Check } from "lucide-react";
import { TutorialStep } from "./types";
import { TUTORIAL_STEPS } from "./tutorialData";

interface TutorialCardProps {
  step: TutorialStep;
  currentStep: number;
  onNext: () => void;
  onSkip: () => void;
}

export default function TutorialCard({ step, currentStep, onNext, onSkip }: TutorialCardProps) {
  return (
    <motion.div
      key={`card-${currentStep}`}
      initial={{ opacity: 0, x: -20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -20, scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        delay: 0.8
      }}
      className="fixed left-8 top-1/2 transform -translate-y-1/2 pointer-events-auto z-50"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-amber-200/50 p-6 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white">
              {step.icon()}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">
                {step.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <span>Step {currentStep + 1} of {TUTORIAL_STEPS.length}</span>
                <div className="flex gap-1">
                  {TUTORIAL_STEPS.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index <= currentStep 
                          ? 'bg-amber-500' 
                          : 'bg-amber-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onSkip}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-4">
          {step.description}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-amber-100 rounded-full h-2 mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: `${((currentStep + 1) / TUTORIAL_STEPS.length) * 100}%` 
            }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
          />
        </div>

        {/* Next Step Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
        >
          {currentStep === TUTORIAL_STEPS.length - 1 ? (
            <>
              <Check className="w-5 h-5" />
              Complete Tutorial
            </>
          ) : (
            <>
              Next Step
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
