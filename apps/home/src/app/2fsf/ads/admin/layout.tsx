import AdminLayout from "@/components/admin/AdminLayout"
import AdminAuth from "@/components/admin/AdminAuth"

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-white text-gray-900">
        <AdminAuth>
          <AdminLayout>{children}</AdminLayout>
        </AdminAuth>
      </body>
    </html>
  )
}
