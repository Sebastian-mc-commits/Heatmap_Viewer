export interface KeywordTag {
  id: string
  text: string
  category?: string
}

export interface GridPoint {
  readonly lat: number
  readonly lng: number
  readonly average_percentage: number
  readonly final_rank: number
  readonly data: {
    keywords: { keyword: string; rank: number }[]
    relevance: "high" | "medium" | "low"
  }
}

export interface HeatMapReport {
  id: number
  created_at: string
  business_name: string
  business_description?: string
  scan_size: string
  grid_points: number
  grid_points_type: string
  grid_measurement: string
  file_path_id: string
  average_rank: number
}

export interface GlobalAnalysis {
  average_rank_percentage_between: number
  average_rank_value_between: number
  high_relevance: number
  medium_relevance: number
  low_relevance: number
  total_ranks: number
}

