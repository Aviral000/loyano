import { ChatFlow, QuickReply } from './types';

export const QUICK_REPLIES: QuickReply[] = [
  {
    id: 'create-account',
    text: 'Create Account',
    action: 'create-account',
  },
  {
    id: 'explore-products',
    text: 'Explore Products',
    action: 'explore',
  },
  {
    id: 'ask-question',
    text: 'Ask a Question',
    action: 'ask',
  },
];

export const ACCOUNT_CREATION_FLOW: ChatFlow = {
  id: 'account-creation',
  name: 'Account Creation',
  steps: [
    {
      prompt: "Great choice! Let's create your account. What's your full name?",
      type: 'text',
      placeholder: 'e.g., John Doe',
      key: 'fullName',
      validation: (value) => value.length >= 2 || 'Name must be at least 2 characters',
    },
    {
      prompt: "Thanks! Now, what's your email address?",
      type: 'email',
      placeholder: 'e.g., john.doe@email.com',
      key: 'email',
      validation: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || 'Please enter a valid email address';
      },
    },
    {
      prompt: "Perfect. Please create a password.",
      type: 'password',
      placeholder: 'Enter your password',
      key: 'password',
      validation: (value) => value.length >= 8 || 'Password must be at least 8 characters',
    },
    {
      prompt: "Please confirm your password.",
      type: 'password',
      placeholder: 'Confirm your password',
      key: 'confirmPassword',
      validation: (value) => {
        // This will be handled in the component
        return true;
      },
    },
    {
      prompt: "Almost there. What's your country or region?",
      type: 'text',
      placeholder: 'e.g., United States',
      key: 'country',
    },
    {
      prompt: "You can also add a phone number (optional).",
      type: 'tel',
      placeholder: 'e.g., +1 234 567 8900',
      key: 'phone',
    },
  ],
  onComplete: (data) => {
    console.log('Account created:', data);
    // Here you would typically send the data to your backend
  },
};

export const EXPLORE_PRODUCTS_FLOW: ChatFlow = {
  id: 'explore-products',
  name: 'Explore Products',
  steps: [
    {
      prompt: "What type of products are you interested in?",
      type: 'text',
      placeholder: 'e.g., Men\'s clothing, Women\'s accessories',
      key: 'productInterest',
    },
    {
      prompt: "What's your preferred style?",
      type: 'text',
      placeholder: 'e.g., Casual, Formal, Sporty',
      key: 'style',
    },
  ],
  onComplete: (data) => {
    console.log('Product exploration:', data);
    // Here you would typically redirect to product pages or show recommendations
  },
};

export const ASK_QUESTION_FLOW: ChatFlow = {
  id: 'ask-question',
  name: 'Ask a Question',
  steps: [
    {
      prompt: "What would you like to know about LOYANO?",
      type: 'text',
      placeholder: 'Ask your question...',
      key: 'question',
    },
  ],
  onComplete: (data) => {
    console.log('Question asked:', data);
    // Here you would typically send the question to your support system
  },
};
