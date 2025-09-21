export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="w-20 h-6 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-300 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-48 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Product Detail Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Skeleton */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-300 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="space-y-6">
            <div>
              <div className="w-3/4 h-8 bg-gray-300 rounded animate-pulse mb-2"></div>
              <div className="w-full h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
              <div className="w-5/6 h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-8 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-20 h-6 bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div>
              <div className="w-16 h-4 bg-gray-300 rounded animate-pulse mb-3"></div>
              <div className="flex space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>
            <div>
              <div className="w-20 h-4 bg-gray-300 rounded animate-pulse mb-3"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-12 h-6 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1 h-12 bg-gray-300 rounded animate-pulse"></div>
              <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
