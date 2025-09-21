"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useProductStore } from "@/stores/useProductStore";
import { useCartStore } from "@/stores/useCartStore";
import { ShoppingCart, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { 
    selectedColor, 
    quantity, 
    isFavorite, 
    setSelectedColor, 
    setQuantity, 
    toggleFavorite 
  } = useProductStore();
  
  const { addItem, openCart, totalItems } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.colors[selectedColor]?.name || "Default",
      image: product.images[0]
    });
    openCart();
  };

  return (
    <div className="space-y-6">
      {/* Product Title and Description */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
        {product.originalPrice && (
          <span className="text-xl text-gray-500 line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
        <div className="flex space-x-3">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === index ? "border-gray-900" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <div className="flex space-x-4">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-black hover:bg-gray-800 text-white"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={toggleFavorite}
            className={isFavorite ? "text-red-500 border-red-500" : ""}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>
        
        {/* Go to Cart Button */}
        {totalItems > 0 && (
          <Link href="/cart">
            <Button 
              variant="outline" 
              className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              View Cart ({totalItems} items)
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
