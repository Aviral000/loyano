"use client"

import { Button } from "@/components/ui/button"
import { Package } from "lucide-react"
import { ProductCard } from "@/components/admin/products/ProductCard"
import { products } from "@/components/admin/products/data"

// Main Products Page Component
export default function ProductsPage() {

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Product Management</h1>
        <Button className="gap-2">
          <Package className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
