"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductState, ProductActions } from '@/types';

interface ProductStore extends ProductState, ProductActions {}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      // State
      selectedColor: 0,
      quantity: 1,
      selectedImage: 0,
      isFavorite: false,

      // Actions
      setSelectedColor: (index: number) => 
        set({ selectedColor: index }),

      setQuantity: (quantity: number) => 
        set({ quantity: Math.max(1, quantity) }),

      setSelectedImage: (index: number) => 
        set({ selectedImage: index }),

      toggleFavorite: () => 
        set((state) => ({ isFavorite: !state.isFavorite })),

      resetState: () => 
        set({ 
          selectedColor: 0, 
          quantity: 1, 
          selectedImage: 0, 
          isFavorite: false 
        }),
    }),
    {
      name: 'product-store',
      partialize: (state) => ({ 
        isFavorite: state.isFavorite 
      }), // Only persist favorite status
    }
  )
);
