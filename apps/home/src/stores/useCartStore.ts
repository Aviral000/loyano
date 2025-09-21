"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState, CartActions } from '@/types';

interface CartStore extends CartState, CartActions {}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // State
      items: [],
      isOpen: false,
      totalItems: 0,
      totalPrice: 0,

      // Actions
      addItem: (newItem) => {
        const { items } = get();
        const existingItem = items.find(item => 
          item.id === newItem.id && item.color === newItem.color
        );

        if (existingItem) {
          set((state) => ({
            items: state.items.map(item =>
              item.id === newItem.id && item.color === newItem.color
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...newItem, quantity: 1 }]
          }));
        }

        // Update totals
        const updatedItems = get().items;
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ totalItems, totalPrice });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }));

        // Update totals
        const updatedItems = get().items;
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ totalItems, totalPrice });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }));

        // Update totals
        const updatedItems = get().items;
        const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        set({ totalItems, totalPrice });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },
    }),
    {
      name: 'cart-store',
      partialize: (state) => ({ 
        items: state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice
      }),
    }
  )
);
