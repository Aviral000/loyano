"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, User, Search, ChevronUp, X, Trash2, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import { useProductStore } from "@/stores/useProductStore";
import Image from "next/image";

export default function DropdownNudge() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    items, 
    totalItems, 
    totalPrice, 
    isOpen: cartOpen, 
    toggleCart, 
    removeItem, 
    updateQuantity 
  } = useCartStore();
  const { isFavorite } = useProductStore();

  const handleAddToCart = () => {
    // This would normally add the current product to cart
    // For now, we'll just open the cart to show current items
    toggleCart();
  };

  return (
    <>
      {/* Nudge Button */}
      <motion.div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100 }}
        animate={{ y: isOpen ? 0 : 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-t-2xl shadow-2xl border-t-2 border-white/20 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="bg-white text-amber-600 text-xs font-bold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="font-semibold">Quick Actions</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Action Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Cart */}
                <motion.button
                  onClick={toggleCart}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <ShoppingCart className="w-6 h-6" />
                      {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {totalItems}
                        </span>
                      )}
                    </div>
                    <span className="font-semibold text-sm">Cart</span>
                    {totalPrice > 0 && (
                      <span className="text-xs opacity-90">${totalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </motion.button>

                {/* Wishlist */}
                <motion.button
                  className={`p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isFavorite 
                      ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 hover:from-red-50 hover:to-pink-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                    <span className="font-semibold text-sm">Wishlist</span>
                    <span className="text-xs opacity-70">
                      {isFavorite ? 'Added' : 'Add items'}
                    </span>
                  </div>
                </motion.button>

                {/* Search */}
                <motion.button
                  className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <Search className="w-6 h-6" />
                    <span className="font-semibold text-sm">Search</span>
                    <span className="text-xs opacity-90">Find products</span>
                  </div>
                </motion.button>

                {/* Account */}
                <motion.button
                  className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <User className="w-6 h-6" />
                    <span className="font-semibold text-sm">Account</span>
                    <span className="text-xs opacity-90">Sign in</span>
                  </div>
                </motion.button>
              </div>

              {/* Quick Cart Summary */}
              {items.length > 0 && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{totalItems} items in cart</h4>
                        <p className="text-sm text-gray-600">${totalPrice.toFixed(2)} total</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={toggleCart}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Cart
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 border-l border-gray-200"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Cart Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Shopping Cart</h3>
                <button
                  onClick={toggleCart}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {items.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={`${item.id}-${item.color}`} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                        <p className="text-xs text-gray-600">Color: {item.color}</p>
                        <p className="text-sm font-semibold text-gray-900">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer */}
              {items.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-gray-900">Total:</span>
                    <span className="text-lg font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {(isOpen || cartOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
              if (cartOpen) toggleCart();
            }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
}
