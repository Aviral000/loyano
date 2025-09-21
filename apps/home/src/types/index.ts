// Product Types
export interface ProductColor {
  name: string;
  value: string;
}

export interface ProductReview {
  id: number;
  author: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  helpful: number;
  total: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  colors: ProductColor[];
  rating: number;
  totalReviews: number;
  reviews: ProductReview[];
  category?: string;
  brand?: string;
  inStock?: boolean;
  tags?: string[];
}

// Cart Types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
  inStock?: boolean;
}

// Product State Types
export interface ProductState {
  selectedColor: number;
  quantity: number;
  selectedImage: number;
  isFavorite: boolean;
}

export interface ProductActions {
  setSelectedColor: (index: number) => void;
  setQuantity: (quantity: number) => void;
  setSelectedImage: (index: number) => void;
  toggleFavorite: () => void;
  resetState: () => void;
}

// Cart State Types
export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
}

export interface CartActions {
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

// Chatbot Types
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'input' | 'message';
}

export interface QuickReply {
  text: string;
  action: string;
}

export interface InputStep {
  key: string;
  prompt: string;
  placeholder: string;
  type: 'text' | 'email' | 'password' | 'tel';
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

// Tutorial Types
export interface TutorialStep {
  id: number;
  title: string;
  description: string;
  icon: () => React.ReactNode;
  target: "mens-fabric" | "womens-fabric";
  delay: number;
}

export interface TutorialState {
  currentStep: number;
  isActive: boolean;
  isCompleted: boolean;
  completedSteps: number[];
  countdown: number;
}

export interface TutorialActions {
  startTutorial: () => void;
  nextStep: () => void;
  skipTutorial: () => void;
  completeTutorial: () => void;
  resetTutorial: () => void;
  setActive: (active: boolean) => void;
}

// Navigation Types
export interface NavType {
  label: string;
  href: string;
}

export interface NavCategory {
  title: string;
  href: string;
  description?: string;
  types?: NavType[];
}

export interface NavFeatured {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface NavConfig {
  label: string;
  href: string;
  description: string;
  featured?: NavFeatured;
  sub: NavCategory[];
}
