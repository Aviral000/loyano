"use client"

import { Star, DollarSign, ShoppingCart } from "lucide-react"
import { Product } from "./types"

interface ProductActionsProps {
  product: Product
}

export function ProductActions({ product }: ProductActionsProps) {
  return (
    <>
      {/* Description */}
      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>

      {/* Quick Stats */}
      <div className="mt-4 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-green-600" />
          <span>Revenue: ${(product.price * product.sold).toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4 text-blue-600" />
          <span>Orders: {Math.floor(product.sold / 2)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-500" />
          <span>Reviews: {product.reviews}</span>
        </div>
      </div>
    </>
  )
}
