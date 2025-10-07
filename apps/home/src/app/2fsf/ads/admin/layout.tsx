import AdminLayout from "@/components/admin/AdminLayout"
import AdminAuth from "@/components/admin/AdminAuth"

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuth>
      <AdminLayout>{children}</AdminLayout>
    </AdminAuth>
  )
}
