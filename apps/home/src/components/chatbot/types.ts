export interface ChatMessage {
  id: string;
  content: string;
  sender: 'ai' | 'user';
  timestamp: Date;
  type?: 'text' | 'input' | 'quick-reply';
}

export interface QuickReply {
  id: string;
  text: string;
  action: string;
  data?: any;
}

export interface InputStep {
  prompt: string;
  type: 'text' | 'email' | 'password' | 'tel';
  placeholder: string;
  key: string;
  validation?: (value: string) => boolean | string;
}

export interface ChatFlow {
  id: string;
  name: string;
  steps: InputStep[];
  onComplete?: (data: Record<string, any>) => void;
}

export interface ChatbotState {
  isOpen: boolean;
  messages: ChatMessage[];
  currentFlow: ChatFlow | null;
  currentStep: number;
  userData: Record<string, any>;
  isLoading: boolean;
  autoCloseCountdown: number;
}

export interface ChatbotActions {
  toggleChat: () => void;
  closeChat: () => void;
  sendMessage: (content: string) => void;
  startFlow: (flow: ChatFlow) => void;
  nextStep: (value: string) => void;
  resetChat: () => void;
  cancelAutoClose: () => void;
}
