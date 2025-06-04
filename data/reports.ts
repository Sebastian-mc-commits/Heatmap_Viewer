import type { gridSizes } from "./grid-sizes"

export interface Report {
  id: number
  created_at: string
  business_name: string
  business_description: string | null
  scan_size: number
  grid_points: number
  grid_points_type: (typeof gridSizes)[number]
  grid_measurement: "km" | "ml"
  file_path_id: string
  average_rank: number
}

export interface GridPoint {
  lat: number
  lng: number
  average_percentage: number
  final_rank: number
  data: KeywordRankData[]
}

export interface KeywordRankData {
  keyword: string
  location_rank: {
    rank: number
    percentage: number
  }
  percentage: number
}

export interface GlobalAnalysis {
  average_rank_percentage_between: number
  average_rank_value_between: number
  high_relevance: number
  medium_relevance: number
  low_relevance: number
  total_ranks: number
}

// Sample reports data
export const reports: Report[] = [
  {
    id: 1,
    created_at: "2025-03-25T14:30:00Z",
    business_name: "Downtown Coffee Shop",
    business_description: "Local coffee shop in the downtown area",
    scan_size: 5,
    grid_points: 36,
    grid_points_type: "6x6",
    grid_measurement: "km",
    file_path_id: "report_1_2025_03_25",
    average_rank: 4.2,
  },
  {
    id: 2,
    created_at: "2025-03-24T10:15:00Z",
    business_name: "Tech Hub Coworking",
    business_description: "Coworking space for tech startups",
    scan_size: 8,
    grid_points: 49,
    grid_points_type: "7x7",
    grid_measurement: "km",
    file_path_id: "report_2_2025_03_24",
    average_rank: 3.7,
  },
  {
    id: 3,
    created_at: "2025-03-23T16:45:00Z",
    business_name: "City Fitness Center",
    business_description: "24/7 fitness center with full amenities",
    scan_size: 10,
    grid_points: 100,
    grid_points_type: "10x10",
    grid_measurement: "km",
    file_path_id: "report_3_2025_03_23",
    average_rank: 2.9,
  },
  {
    id: 4,
    created_at: "2025-03-22T09:00:00Z",
    business_name: "Riverside Restaurant",
    business_description: "Fine dining with river views",
    scan_size: 6,
    grid_points: 64,
    grid_points_type: "8x8",
    grid_measurement: "ml",
    file_path_id: "report_4_2025_03_22",
    average_rank: 4.8,
  },
  {
    id: 5,
    created_at: "2025-03-21T13:20:00Z",
    business_name: "Central Bookstore",
    business_description: "Independent bookstore with cafe",
    scan_size: 7,
    grid_points: 81,
    grid_points_type: "9x9",
    grid_measurement: "km",
    file_path_id: "report_5_2025_03_21",
    average_rank: 3.5,
  },
]

// Sample heat map data for a specific report
export const sampleHeatMapData: GridPoint[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    average_percentage: 85.3,
    final_rank: 1,
    data: [
      {
        keyword: "coffee shop",
        location_rank: { rank: 1, percentage: 92.5 },
        percentage: 92.5,
      },
      {
        keyword: "espresso",
        location_rank: { rank: 2, percentage: 88.7 },
        percentage: 88.7,
      },
      {
        keyword: "cafe",
        location_rank: { rank: 1, percentage: 90.2 },
        percentage: 90.2,
      },
    ],
  },
  {
    lat: 40.7138,
    lng: -74.008,
    average_percentage: 76.8,
    final_rank: 2,
    data: [
      {
        keyword: "coffee shop",
        location_rank: { rank: 3, percentage: 78.4 },
        percentage: 78.4,
      },
      {
        keyword: "espresso",
        location_rank: { rank: 2, percentage: 82.1 },
        percentage: 82.1,
      },
      {
        keyword: "cafe",
        location_rank: { rank: 3, percentage: 70.0 },
        percentage: 70.0,
      },
    ],
  },
  {
    lat: 40.7118,
    lng: -74.004,
    average_percentage: 65.2,
    final_rank: 3,
    data: [
      {
        keyword: "coffee shop",
        location_rank: { rank: 5, percentage: 62.3 },
        percentage: 62.3,
      },
      {
        keyword: "espresso",
        location_rank: { rank: 4, percentage: 68.9 },
        percentage: 68.9,
      },
      {
        keyword: "cafe",
        location_rank: { rank: 4, percentage: 64.5 },
        percentage: 64.5,
      },
    ],
  },
  {
    lat: 40.7148,
    lng: -74.002,
    average_percentage: 45.7,
    final_rank: 5,
    data: [
      {
        keyword: "coffee shop",
        location_rank: { rank: 8, percentage: 42.1 },
        percentage: 42.1,
      },
      {
        keyword: "espresso",
        location_rank: { rank: 7, percentage: 48.6 },
        percentage: 48.6,
      },
      {
        keyword: "cafe",
        location_rank: { rank: 6, percentage: 46.4 },
        percentage: 46.4,
      },
    ],
  },
  {
    lat: 40.7108,
    lng: -74.01,
    average_percentage: 58.9,
    final_rank: 4,
    data: [
      {
        keyword: "coffee shop",
        location_rank: { rank: 6, percentage: 56.8 },
        percentage: 56.8,
      },
      {
        keyword: "espresso",
        location_rank: { rank: 5, percentage: 60.2 },
        percentage: 60.2,
      },
      {
        keyword: "cafe",
        location_rank: { rank: 5, percentage: 59.7 },
        percentage: 59.7,
      },
    ],
  },
]

// Sample global analysis data
export const sampleGlobalAnalysis: GlobalAnalysis = {
  average_rank_percentage_between: 66.38,
  average_rank_value_between: 3.0,
  high_relevance: 2,
  medium_relevance: 2,
  low_relevance: 1,
  total_ranks: 5,
}

