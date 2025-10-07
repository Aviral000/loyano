"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { LayoutDashboard, ShoppingCart, Users, Package, BarChart3, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface MenuItem {
  title: string
  url: string
  icon: React.ElementType
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/2fsf/ads/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    url: "/2fsf/ads/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    url: "/2fsf/ads/admin/customers",
    icon: Users,
  },
  {
    title: "Products",
    url: "/2fsf/ads/admin/products",
    icon: Package,
  },
  {
    title: "Analytics",
    url: "/2fsf/ads/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "/2fsf/ads/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear authentication
    const sessionKey = process.env.NEXT_PUBLIC_ADMIN_SESSION_KEY || "admin_authenticated"
    localStorage.removeItem(sessionKey)
    
    // Redirect to home page
    router.push("/")
  }

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url as any} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-gray-600"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
