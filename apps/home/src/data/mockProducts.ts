import { Product } from "@/types";

export const mockProductData: Product = {
  id: "1",
  name: "LOYANO Premium Italian Fabric Smartwatch",
  price: 249.99,
  originalPrice: 299.99,
  description:
    "Experience the future of wearable technology with the LOYANO Premium Italian Fabric Smartwatch. Seamlessly blending Italian craftsmanship with cutting-edge technology, this smartwatch offers comprehensive health tracking, customizable watch faces, and smart notifications. Stay connected and stylish with our premium Italian fabric technology.",
  images: [
    "/images/italian-linen-fabric.jpeg", 
    "/images/italian-women-fabric.webp",
    "/images/Summer-mens.jpg"
  ],
  colors: [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Rose Gold", value: "#E8B4A0" },
  ],
  rating: 4.5,
  totalReviews: 124,
  reviews: [
    {
      id: 1,
      author: "Sophie Carter",
      role: "Verified Buyer",
      rating: 5,
      date: "2 days ago",
      content:
        "This smartwatch has exceeded my expectations! The Italian fabric technology is incredible - it feels premium and comfortable. The design is elegant and modern, and the health tracking features are incredibly accurate. I especially love the customizable watch faces that allow me to express my style every day.",
      helpful: 12,
      total: 15,
    },
    {
      id: 2,
      author: "Ethan Bennett",
      role: "Verified Buyer",
      rating: 4,
      date: "1 week ago",
      content:
        "I've been using the LOYANO Smartwatch for a few weeks now, and it's been a great addition to my daily routine. The Italian craftsmanship really shows in the quality. The battery life is impressive, and the fabric technology makes it incredibly comfortable to wear all day. The only minor issue is the occasional lag when switching between apps.",
      helpful: 8,
      total: 12,
    },
  ],
  category: "Smartwatches",
  brand: "LOYANO",
  inStock: true,
  tags: ["Italian", "Premium", "Smartwatch", "Fabric Technology"]
};
