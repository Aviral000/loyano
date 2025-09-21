import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUpRight, ArrowDownRight, Plus } from "lucide-react"

// Mock data for charts - in a real app, this would come from an API
const dailyActivityData = [
  { name: "Mon", visitors: 1200, orders: 400 },
  { name: "Tue", visitors: 1500, orders: 450 },
  { name: "Wed", visitors: 1300, orders: 420 },
  { name: "Thu", visitors: 1800, orders: 520 },
  { name: "Fri", visitors: 2000, orders: 600 },
  { name: "Sat", visitors: 1600, orders: 480 },
  { name: "Sun", visitors: 1400, orders: 450 },
]

const monthlyPerformanceData = [
  { name: "Jan", revenue: 42000, profit: 15000 },
  { name: "Feb", revenue: 45000, profit: 16000 },
  { name: "Mar", revenue: 48000, profit: 17000 },
  { name: "Apr", revenue: 46000, profit: 16500 },
  { name: "May", revenue: 52000, profit: 18000 },
  { name: "Jun", revenue: 55000, profit: 19000 },
]

const recentActivities = [
  {
    id: 1,
    type: "order",
    message: "New order from John Doe for Product Pro Max",
    time: "5 min ago",
    icon: ShoppingCart,
  },
  {
    id: 2,
    type: "user",
    message: "Customer Jane Smith logged in from New York",
    time: "15 min ago",
    icon: Users,
  },
  {
    id: 3,
    type: "payment",
    message: "Payment received for subscription renewal",
    time: "30 min ago",
    icon: DollarSign,
  },
  {
    id: 4,
    type: "product",
    message: "Product Deluxe added to cart by new user",
    time: "1 hour ago",
    icon: ShoppingCart,
  },
  {
    id: 5,
    type: "support",
    message: "New support ticket from customer #3456",
    time: "2 hours ago",
    icon: Users,
  },
]

const pendingTasks = [
  { id: 1, task: "Review Q3 financial reports", dueDate: "2024-09-30", completed: false },
  { id: 2, task: "Approve new user registrations", dueDate: "2024-08-25", completed: false },
  { id: 3, task: "Update product pricing for holiday season", dueDate: "2024-10-15", completed: false },
  { id: 4, task: "Plan Q4 marketing campaign", dueDate: "2024-09-01", completed: true },
]

const liveUsers = [
  { id: 1, name: "User 1", avatar: "/user-avatar-1.png" },
  { id: 2, name: "User 2", avatar: "/diverse-user-avatar-set-2.png" },
  { id: 3, name: "User 3", avatar: "/diverse-user-avatars-3.png" },
  { id: 4, name: "User 4", avatar: "/user-avatar-4.png" },
  { id: 5, name: "User 5", avatar: "/user-avatar-5.png" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,500</div>
            <div className="flex items-center text-xs text-green-600">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12.5% from last period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,340</div>
            <div className="flex items-center text-xs text-red-600">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              -2.1% from last period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <div className="flex items-center text-xs text-green-600">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +8.7% from last period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,890</div>
            <div className="flex items-center text-xs text-green-600">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +5.2% from last period
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section - Simplified without recharts for now */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Recent Activity */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
                      <activity.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.message}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Users */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Live Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {liveUsers.map((user) => (
                <Avatar key={user.id} className="h-10 w-10">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Tasks */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Pending Tasks</CardTitle>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox checked={task.completed} />
                  <span className={`text-sm ${task.completed ? "line-through text-gray-500" : ""}`}>{task.task}</span>
                </div>
                <span className="text-xs text-gray-500">{task.dueDate}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">System Status</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              All systems operational
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
