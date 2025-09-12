export interface TutorialStep {
  id: number;
  title: string;
  description: string;
  icon: () => React.ReactNode;
  target: string;
  delay: number;
}

export interface TutorialState {
  currentStep: number;
  isActive: boolean;
  isCompleted: boolean;
  completedSteps: number[];
  countdown: number;
}
