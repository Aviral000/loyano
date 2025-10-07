export const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "low-stock":
      return "bg-yellow-100 text-yellow-800"
    case "inactive":
      return "bg-red-100 text-red-800"
    case "out-of-stock":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export const getStockColor = (stock: number, status: string) => {
  if (status === "inactive") return "text-red-600"
  if (stock === 0) return "text-red-600"
  if (stock < 10) return "text-yellow-600"
  return "text-green-600"
}
