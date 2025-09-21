"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Eye, EyeOff } from "lucide-react"

interface AdminAuthProps {
  children: React.ReactNode
}

export default function AdminAuth({ children }: AdminAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Check if already authenticated on mount
  useEffect(() => {
    const sessionKey = process.env.NEXT_PUBLIC_ADMIN_SESSION_KEY || "admin_authenticated"
    const authStatus = localStorage.getItem(sessionKey)
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simple password check - in production, this would be server-side
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    const sessionKey = process.env.NEXT_PUBLIC_ADMIN_SESSION_KEY
    
    if (password === adminPassword) {
      setIsAuthenticated(true)
      localStorage.setItem(sessionKey as string, "true")
    } else {
      setError("Invalid admin credentials")
    }

    setIsLoading(false)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    const sessionKey = process.env.NEXT_PUBLIC_ADMIN_SESSION_KEY || "admin_authenticated"
    localStorage.removeItem(sessionKey)
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <p className="text-gray-600">Enter admin credentials to continue</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Admin Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Access Admin Panel"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <p className="text-xs text-blue-800">
                <strong>Demo Credentials:</strong><br />
                Password: LOYANO_ADMIN_2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      {children}
      {/* Logout button - hidden but accessible */}
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="opacity-50 hover:opacity-100"
        >
          Logout
        </Button>
      </div>
    </div>
  )
}
