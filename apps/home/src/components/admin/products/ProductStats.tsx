"use client"

import { Button } from "@/components/ui/button"
import { Star, Eye, Edit, MoreHorizontal } from "lucide-react"
import { Product } from "./types"
import { getStockColor } from "./utils"

interface ProductStatsProps {
  product: Product
}

export function ProductStats({ product }: ProductStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
      {/* Pricing */}
      <div>
        <p className="text-sm font-medium">Price</p>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">${product.price}</p>
        {product.originalPrice > product.price ? (
          <p className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </p>
        ) : null}
        </div>
        {product.originalPrice > product.price ? (
          <p className="text-xs text-green-600">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
          </p>
        ) : null}
      </div>

      {/* Stock */}
      <div>
        <p className="text-sm font-medium">Stock</p>
        <p className={`text-sm font-semibold ${getStockColor(product.stock, product.status)}`}>
          {product.stock} units
        </p>
        {product.stock < 10 && product.stock > 0 ? (
          <p className="text-xs text-yellow-600">Low stock</p>
        ) : null}
      </div>

      {/* Sales */}
      <div>
        <p className="text-sm font-medium">Sold</p>
        <p className="text-sm text-gray-600">{product.sold} units</p>
      </div>

      {/* Rating */}
      <div>
        <p className="text-sm font-medium">Rating</p>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      </div>

      {/* Colors & Sizes */}
      <div>
        <p className="text-sm font-medium">Variants</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {product.colors.slice(0, 2).map((color: string, index: number) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {color}
            </span>
          ))}
          {product.colors.length > 2 ? (
            <span className="text-xs text-gray-500">+{product.colors.length - 2}</span>
          ) : null}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {product.sizes.length} sizes
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-2">
          <Eye className="h-4 w-4" />
          View
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <Edit className="h-4 w-4" />
          Edit
        </Button>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
