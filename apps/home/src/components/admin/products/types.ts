export interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice: number
  status: 'active' | 'low-stock' | 'inactive' | 'out-of-stock'
  stock: number
  sold: number
  rating: number
  reviews: number
  image: string
  description: string
  colors: string[]
  sizes: string[]
}
