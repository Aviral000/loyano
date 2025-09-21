"use client";

import { Search, User, ShoppingCart, Menu } from "lucide-react";

export default function ProductHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-semibold text-lg">LOYANO</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                New Arrivals
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Featured
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Men
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Women
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Accessories
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600" />
            <User className="w-5 h-5 text-gray-600" />
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <Menu className="w-5 h-5 text-gray-600 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
