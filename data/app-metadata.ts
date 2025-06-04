import { MapIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface AppMetadata {
  title: string
  description: string
  icon: LucideIcon
  version: string
}

export const appMetadata: AppMetadata = {
  title: "Heat Map",
  description: "Heat Map generator to improve business SEO performance",
  icon: MapIcon,
  version: "1.0.0",
}

