import { BarChart3, FileText, Home, Map, Settings, User, CircleArrowUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface PageInfo {
  id: string
  name: string
  path: string
  icon: LucideIcon
  description?: string
  disabled: boolean;
}

export const pages: PageInfo[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    path: "/",
    icon: Home,
    description: "Overview of your business locations",
    disabled: false
  },
  {
    id: "reports",
    name: "Reports",
    path: "/reports",
    icon: BarChart3,
    description: "View and manage analysis reports",
    disabled: false
  },
  // {
  //   id: "analytics",
  //   name: "Analytics",
  //   path: "/analytics",
  //   icon: FileText,
  //   description: "Detailed analytics and insights",
  // disabled: false
  // },
  // {
  //   id: "settings",
  //   name: "Settings",
  //   path: "/settings",
  //   icon: Settings,
  //   description: "Configure application preferences",
  // disabled: false
  // },
  // {
  //   id: "profile",
  //   name: "Profile",
  //   path: "/profile",
  //   icon: User,
  //   description: "Manage your profile information",
  // disabled: false
  // },
  {
    id: "audit",
    name: "Audit",
    path: "/audit",
    icon: CircleArrowUp,
    description: "Manage audits",
    disabled: true
  },
  {
    id: "settings",
    name: "Settings",
    path: "/settings",
    icon: Settings,
    description: "Configure application preferences",
    disabled: false
  },
]

