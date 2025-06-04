import type React from "react"
import { BarChart3, FileText, User } from "lucide-react"

export interface MenuOption {
  id: string
  name: string
  path: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
}

export const mainMenuOptions: MenuOption[] = [
  {
    id: "heatmap",
    name: "Heat Map",
    path: "/",
    icon: BarChart3,
    description: "Analyze business density with heat maps",
  },
  {
    id: "reports",
    name: "Reports",
    path: "/reports",
    icon: FileText,
    description: "View and manage analysis reports",
  },
  {
    id: "user",
    name: "User",
    path: "/user",
    icon: User,
    description: "Manage your account settings",
  },
]

