"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useProductStore } from "@/stores/useProductStore";
import { mockProductData } from "@/data/mockProducts";
import ProductImages from "@/components/product/ProductImages";
import ProductInfo from "@/components/product/ProductInfo";
import ProductReviews from "@/components/product/ProductReviews";
import ProductFooter from "@/components/product/ProductFooter";

export default function ProductDetailPage() {
  const params = useParams();
  const { resetState } = useProductStore();
  
  // Reset product state when component mounts or product ID changes
  useEffect(() => {
    resetState();
  }, [params.id, resetState]);

  // In a real app, you would fetch product data based on params.id
  // For now, we'll use mock data
  const product = mockProductData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-sm text-gray-500">
          <span>Home</span> / <span>Product</span> / <span>{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImages product={product} />
          <ProductInfo product={product} />
        </div>

        <ProductReviews product={product} />
      </div>

      <ProductFooter />
    </div>
  );
}
