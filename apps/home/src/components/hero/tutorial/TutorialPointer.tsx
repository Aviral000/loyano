"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TutorialStep } from "./types";

interface TutorialPointerProps {
  step: TutorialStep;
}

export default function TutorialPointer({ step }: TutorialPointerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const targetElement = document.getElementById(step.target);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setPosition({
          x: centerX - 25, // Offset to center the pointer
          y: centerY - 25
        });
      }
    };

    // Update position on mount and resize
    updatePosition();
    window.addEventListener('resize', updatePosition);
    
    return () => window.removeEventListener('resize', updatePosition);
  }, [step.target]);

  return (
    <motion.div
      key={step.id}
      initial={{ 
        opacity: 0, 
        scale: 0.5,
        x: position.x,
        y: position.y
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: position.x,
        y: position.y
      }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        delay: 0.5
      }}
      className="fixed pointer-events-auto z-50"
    >
      {/* Animated Pointer */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Pointer Circle */}
        <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-xl flex items-center justify-center border-2 border-white">
          <div className="text-white">
            {step.icon()}
          </div>
        </div>
        
        {/* Ripple Effect */}
        <motion.div
          animate={{ 
            scale: [1, 2, 3],
            opacity: [0.7, 0.3, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
