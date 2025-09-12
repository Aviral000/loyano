import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TUTORIAL_STEPS } from './tutorialData';

interface TutorialState {
  // State
  currentStep: number;
  isActive: boolean;
  isCompleted: boolean;
  completedSteps: number[];
  countdown: number;
  countdownInterval: NodeJS.Timeout | null;
  isCollapsed: boolean;
  collapseTimeout: NodeJS.Timeout | null;
  
  // Actions
  setCurrentStep: (step: number) => void;
  setIsActive: (active: boolean) => void;
  setIsCompleted: (completed: boolean) => void;
  setCompletedSteps: (steps: number[]) => void;
  setCountdown: (count: number) => void;
  setCountdownInterval: (interval: NodeJS.Timeout | null) => void;
  setIsCollapsed: (collapsed: boolean) => void;
  setCollapseTimeout: (timeout: NodeJS.Timeout | null) => void;
  
  // Tutorial actions
  handleNextStep: () => void;
  handleSkip: () => void;
  handleRestart: () => void;
  toggleCollapse: () => void;
  
  // Auto-start for first-time visitors
  initializeTutorial: () => void;
}

export const useTutorialStore = create<TutorialState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentStep: 0,
      isActive: false,
      isCompleted: false,
      completedSteps: [],
      countdown: 5,
      countdownInterval: null,
      isCollapsed: false,
      collapseTimeout: null,

      // Basic setters
      setCurrentStep: (step) => set({ currentStep: step }),
      setIsActive: (active) => set({ isActive: active }),
      setIsCompleted: (completed) => set({ isCompleted: completed }),
      setCompletedSteps: (steps) => set({ completedSteps: steps }),
      setCountdown: (count) => set({ countdown: count }),
      setCountdownInterval: (interval) => set({ countdownInterval: interval }),
      setIsCollapsed: (collapsed) => set({ isCollapsed: collapsed }),
      setCollapseTimeout: (timeout) => set({ collapseTimeout: timeout }),

      // Tutorial actions
      handleNextStep: () => {
        const { currentStep, completedSteps } = get();
        const newCompletedSteps = [...completedSteps, currentStep];
        
        set({ completedSteps: newCompletedSteps });
        
        if (currentStep < TUTORIAL_STEPS.length - 1) {
          set({ currentStep: currentStep + 1 });
        } else {
          set({ isCompleted: true, countdown: 5 });
          
          // Start countdown timer
          const interval = setInterval(() => {
            const { countdown } = get();
            if (countdown <= 1) {
              clearInterval(interval);
              setTimeout(() => {
                set({ isActive: false });
              }, 100);
              set({ countdown: 0, countdownInterval: null });
            } else {
              set({ countdown: countdown - 1 });
            }
          }, 1000);
          
          set({ countdownInterval: interval });
        }
      },

      handleSkip: () => {
        const { countdownInterval, collapseTimeout } = get();
        if (countdownInterval) {
          clearInterval(countdownInterval);
        }
        if (collapseTimeout) {
          clearTimeout(collapseTimeout);
        }
        
        // Start auto-collapse timer after 10 seconds
        const timeout = setTimeout(() => {
          set({ isCollapsed: true });
        }, 10000);
        
        set({ 
          isActive: false, 
          countdownInterval: null,
          collapseTimeout: timeout
        });
      },

      handleRestart: () => {
        const { countdownInterval, collapseTimeout } = get();
        if (countdownInterval) {
          clearInterval(countdownInterval);
        }
        if (collapseTimeout) {
          clearTimeout(collapseTimeout);
        }
        set({
          currentStep: 0,
          isCompleted: false,
          isActive: true,
          completedSteps: [],
          countdown: 5,
          countdownInterval: null,
          isCollapsed: false,
          collapseTimeout: null
        });
      },

      toggleCollapse: () => {
        const { isCollapsed, collapseTimeout } = get();
        if (collapseTimeout) {
          clearTimeout(collapseTimeout);
        }
        set({ 
          isCollapsed: !isCollapsed,
          collapseTimeout: null
        });
      },

      // Initialize tutorial for first-time visitors
      initializeTutorial: () => {
        const hasSeenTutorial = localStorage.getItem('loyano-tutorial-seen');
        if (!hasSeenTutorial) {
          set({ isActive: true });
          localStorage.setItem('loyano-tutorial-seen', 'true');
        }
      }
    }),
    {
      name: 'loyano-tutorial-storage',
      partialize: (state) => ({
        currentStep: state.currentStep,
        isCompleted: state.isCompleted,
        completedSteps: state.completedSteps
      })
    }
  )
);
