"use client";

import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { TUTORIAL_STEPS } from "./tutorialData";
import { useTutorialStore } from "./useTutorialStore";

export default function TutorialPanel() {
  const { completedSteps, handleRestart, isCollapsed, toggleCollapse } = useTutorialStore();
  // Collapsed state - just show star icon and progress
  if (isCollapsed) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleCollapse}
          className="bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-amber-200/50 p-3 flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-amber-600" />
            {completedSteps.length === TUTORIAL_STEPS.length && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-2 h-2 text-white" />
              </div>
            )}
          </div>
          <span className="text-xs font-semibold text-amber-600">
            {completedSteps.length}/{TUTORIAL_STEPS.length}
          </span>
        </motion.button>
      </div>
    );
  }

  // Expanded state - full tutorial panel
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/50 p-4 max-w-xs"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-800 text-sm">LOYANO Tutorial</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-amber-600">
              <span>{completedSteps.length}/{TUTORIAL_STEPS.length}</span>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <button
              onClick={toggleCollapse}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-amber-100 rounded-full h-2 mb-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: `${(completedSteps.length / TUTORIAL_STEPS.length) * 100}%` 
            }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
          />
        </div>

        {/* Checklist */}
        <div className="space-y-2 mb-4">
          {TUTORIAL_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-2 text-xs ${
                completedSteps.includes(index) 
                  ? 'text-green-600' 
                  : 'text-slate-500'
              }`}
            >
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                completedSteps.includes(index)
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-200 text-slate-400'
              }`}>
                {completedSteps.includes(index) ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-400" />
                )}
              </div>
              <span className={`${
                completedSteps.includes(index) ? 'line-through' : ''
              }`}>
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRestart}
              className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs font-semibold"
            >
            <Sparkles className="w-3 h-3" />
            {completedSteps.length === TUTORIAL_STEPS.length ? 'Restart' : 'Continue'}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
