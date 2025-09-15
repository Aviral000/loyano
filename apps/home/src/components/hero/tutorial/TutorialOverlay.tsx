"use client";

import { AnimatePresence } from "framer-motion";
import { TUTORIAL_STEPS } from "./tutorialData";
import { useTutorialStore } from "./useTutorialStore";
import TutorialPointer from "./TutorialPointer";
import TutorialCard from "./TutorialCard";
import CompletionMessage from "./CompletionMessage";

export default function TutorialOverlay() {
  const { 
    currentStep, 
    isCompleted, 
    countdown, 
    handleNextStep, 
    handleSkip, 
    handleRestart 
  } = useTutorialStore();
  
  const currentTutorialStep = TUTORIAL_STEPS[currentStep];

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Tutorial Content */}
      <div className="relative w-full h-full">
        {/* Pointer Animation */}
        <TutorialPointer step={currentTutorialStep} />

        {/* Tutorial Card */}
        <TutorialCard 
          step={currentTutorialStep}
          currentStep={currentStep}
          onNext={handleNextStep}
          onSkip={handleSkip}
        />

        {/* Completion Message */}
        <AnimatePresence>
          {isCompleted && (
            <CompletionMessage 
              countdown={countdown}
              onSkip={handleSkip}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
