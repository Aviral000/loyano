"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Product } from "./types"
import { getStatusColor } from "./utils"
import { ProductStats } from "@/components/admin/products/ProductStats"
import { ProductActions } from "@/components/admin/products/ProductActions"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="text-xs text-gray-500">{product.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(product.status)}>
              {product.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ProductStats product={product} />
        <ProductActions product={product} />
      </CardContent>
    </Card>
  )
}
