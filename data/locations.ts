export interface Location {
  id: number
  name: string
  lat: number
  lng: number
  performance: number
}

export const locations: Location[] = [
  { id: 1, name: "Downtown Office", lat: 40.7128, lng: -74.006, performance: 92 },
  { id: 2, name: "Uptown Branch", lat: 40.7831, lng: -73.9712, performance: 78 },
  { id: 3, name: "Westside Store", lat: 40.7589, lng: -73.9851, performance: 85 },
  { id: 4, name: "Eastside Location", lat: 40.7214, lng: -73.9879, performance: 63 },
  { id: 5, name: "South End Shop", lat: 40.7033, lng: -74.017, performance: 71 },
]

