"use client";

import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useTutorialStore } from "./tutorial/useTutorialStore";
import TutorialPanel from "./tutorial/TutorialPanel";
import TutorialOverlay from "./tutorial/TutorialOverlay";

export default function FabricTutorial() {
  const { isActive, initializeTutorial } = useTutorialStore();

  // Initialize tutorial on mount
  useEffect(() => {
    initializeTutorial();
  }, [initializeTutorial]);

  if (!isActive) {
    return <TutorialPanel />;
  }

  return (
    <AnimatePresence>
      {isActive && <TutorialOverlay />}
    </AnimatePresence>
  );
}
