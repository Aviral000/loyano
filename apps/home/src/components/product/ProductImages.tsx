"use client";

import Image from "next/image";
import { Product } from "@/types";
import { useProductStore } from "@/stores/useProductStore";

interface ProductImagesProps {
  product: Product;
}

export default function ProductImages({ product }: ProductImagesProps) {
  const { selectedImage, setSelectedImage } = useProductStore();

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
        <Image
          src={product.images[selectedImage] || "/placeholder.svg"}
          alt={product.name}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      {product.images.length > 1 && (
        <div className="grid grid-cols-2 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                selectedImage === index ? "border-black" : "border-gray-200"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} view ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
