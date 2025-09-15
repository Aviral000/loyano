"use client";

import { create } from 'zustand';
import { ChatbotState, ChatbotActions, ChatMessage, ChatFlow } from './types';

interface ChatbotStore extends ChatbotState, ChatbotActions {}

export const useChatbotStore = create<ChatbotStore>((set, get) => ({
  // State
  isOpen: false,
  messages: [],
  currentFlow: null,
  currentStep: 0,
  userData: {},
  isLoading: false,
  autoCloseCountdown: 0,

  // Actions
  toggleChat: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },

  closeChat: () => {
    set({ isOpen: false });
  },

  sendMessage: (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },

  startFlow: (flow: ChatFlow) => {
    set({
      currentFlow: flow,
      currentStep: 0,
      userData: {},
      messages: [],
    });

    // Add initial AI message
    const initialMessage: ChatMessage = {
      id: Date.now().toString(),
      content: flow.steps[0].prompt,
      sender: 'ai',
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, initialMessage],
    }));
  },

  nextStep: (value: string) => {
    const { currentFlow, currentStep, userData } = get();
    
    if (!currentFlow) return;

    // Store user data
    const step = currentFlow.steps[currentStep];
    const updatedUserData = { ...userData, [step.key]: value };

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: step.type === 'password' ? '********' : value,
      sender: 'user',
      timestamp: new Date(),
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      userData: updatedUserData,
    }));

    // Check if there are more steps
    if (currentStep + 1 < currentFlow.steps.length) {
      const nextStep = currentFlow.steps[currentStep + 1];
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: nextStep.prompt,
        sender: 'ai',
        timestamp: new Date(),
      };

      set((state) => ({
        messages: [...state.messages, aiMessage],
        currentStep: currentStep + 1,
      }));
    } else {
      // Flow completed
      if (currentFlow.onComplete) {
        currentFlow.onComplete(updatedUserData);
      }
      
      const completionMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "✨ Your LOYANO account has been created and you are now signed in. Start exploring the collection!",
        sender: 'ai',
        timestamp: new Date(),
      };

      set((state) => ({
        messages: [...state.messages, completionMessage],
        currentFlow: null,
        currentStep: 0,
      }));

      // Start countdown and auto-close chatbot after 3 seconds
      set({ autoCloseCountdown: 3 });
      
      const countdownInterval = setInterval(() => {
        const { autoCloseCountdown } = get();
        if (autoCloseCountdown <= 1) {
          clearInterval(countdownInterval);
          set({
            isOpen: false,
            messages: [],
            userData: {},
            autoCloseCountdown: 0,
          });
        } else {
          set({ autoCloseCountdown: autoCloseCountdown - 1 });
        }
      }, 1000);
    }
  },

  resetChat: () => {
    set({
      messages: [],
      currentFlow: null,
      currentStep: 0,
      userData: {},
      isLoading: false,
      autoCloseCountdown: 0,
    });
  },

  cancelAutoClose: () => {
    set({ autoCloseCountdown: 0 });
  },
}));
