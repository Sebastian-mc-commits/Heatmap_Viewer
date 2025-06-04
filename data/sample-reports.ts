import type { Report, GridPoint, GlobalAnalysis } from "./reports"

// Sample report 1: Coffee Shop
export const sampleReport1: {
  report: Report
  heatMapData: GridPoint[]
  globalAnalysis: GlobalAnalysis
} = {
  report: {
    id: 1001,
    created_at: "2025-03-28T14:30:00Z",
    business_name: "Urban Coffee Roasters",
    business_description: "Specialty coffee shop with in-house roasting",
    scan_size: 5,
    grid_points: 100,
    grid_points_type: "10x10",
    grid_measurement: "km",
    file_path_id: "sample_report_1001",
    average_rank: 4.2,
  },
  globalAnalysis: {
    average_rank_percentage_between: 72.5,
    average_rank_value_between: 3.8,
    high_relevance: 35,
    medium_relevance: 45,
    low_relevance: 20,
    total_ranks: 100,
  },
  heatMapData: Array.from({ length: 100 }, (_, i) => {
    const row = Math.floor(i / 10)
    const col = i % 10
    const centerLat = 40.7128
    const centerLng = -74.006
    const latOffset = (row - 5) * 0.005
    const lngOffset = (col - 5) * 0.005

    // Generate a score that's higher near the center
    const distanceFromCenter = Math.sqrt(Math.pow(row - 5, 2) + Math.pow(col - 5, 2))
    const baseScore = 100 - distanceFromCenter * 10
    const score = Math.max(30, Math.min(95, baseScore + (Math.random() * 20 - 10)))

    return {
      lat: centerLat + latOffset,
      lng: centerLng + lngOffset,
      average_percentage: score,
      final_rank: Math.ceil((100 - score) / 20) + 1,
      data: [
        {
          keyword: "coffee shop",
          location_rank: { rank: Math.ceil((100 - score) / 20) + 1, percentage: score },
          percentage: score,
        },
        {
          keyword: "specialty coffee",
          location_rank: { rank: Math.ceil((100 - score) / 20) + 2, percentage: score - 5 },
          percentage: score - 5,
        },
        {
          keyword: "coffee roasters",
          location_rank: { rank: Math.ceil((100 - score) / 20), percentage: score + 5 },
          percentage: score + 5,
        },
      ],
    }
  }),
}

// Sample report 2: Fitness Center
export const sampleReport2: {
  report: Report
  heatMapData: GridPoint[]
  globalAnalysis: GlobalAnalysis
} = {
  report: {
    id: 1002,
    created_at: "2025-03-25T10:15:00Z",
    business_name: "Elite Fitness Center",
    business_description: "24/7 fitness center with personal training and group classes",
    scan_size: 8,
    grid_points: 64,
    grid_points_type: "8x8",
    grid_measurement: "km",
    file_path_id: "sample_report_1002",
    average_rank: 3.5,
  },
  globalAnalysis: {
    average_rank_percentage_between: 68.2,
    average_rank_value_between: 3.2,
    high_relevance: 20,
    medium_relevance: 30,
    low_relevance: 14,
    total_ranks: 64,
  },
  heatMapData: Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8)
    const col = i % 8
    const centerLat = 34.0522
    const centerLng = -118.2437
    const latOffset = (row - 4) * 0.008
    const lngOffset = (col - 4) * 0.008

    // Generate a score that's higher near the center
    const distanceFromCenter = Math.sqrt(Math.pow(row - 4, 2) + Math.pow(col - 4, 2))
    const baseScore = 95 - distanceFromCenter * 12
    const score = Math.max(25, Math.min(90, baseScore + (Math.random() * 20 - 10)))

    return {
      lat: centerLat + latOffset,
      lng: centerLng + lngOffset,
      average_percentage: score,
      final_rank: Math.ceil((100 - score) / 20) + 1,
      data: [
        {
          keyword: "gym",
          location_rank: { rank: Math.ceil((100 - score) / 20) + 1, percentage: score },
          percentage: score,
        },
        {
          keyword: "fitness center",
          location_rank: { rank: Math.ceil((100 - score) / 20) + 2, percentage: score - 8 },
          percentage: score - 8,
        },
        {
          keyword: "personal trainer",
          location_rank: { rank: Math.ceil((100 - score) / 20), percentage: score + 3 },
          percentage: score + 3,
        },
      ],
    }
  }),
}

// Sample report 3: Restaurant
export const sampleReport3: {
  report: Report
  heatMapData: GridPoint[]
  globalAnalysis: GlobalAnalysis
} = {
  report: {
    id: 1003,
    created_at: "2025-03-20T18:45:00Z",
    business_name: "Fusion Bistro",
    business_description: "Modern restaurant with Asian-European fusion cuisine",
    scan_size: 6,
    grid_points: 36,
    grid_points_type: "6x6",
    grid_measurement: "km",
    file_path_id: "sample_report_1003",
    average_rank: 4.8,
  },
  globalAnalysis: {
    average_rank_percentage_between: 85.3,
    average_rank_value_between: 4.5,
    high_relevance: 22,
    medium_relevance: 10,
    low_relevance: 4,
    total_ranks: 36,
  },
  heatMapData: Array.from({ length: 36 }, (_, i) => {
    const row = Math.floor(i / 6)
    const col = i % 6
    const centerLat = 51.5074
    const centerLng = -0.1278
    const latOffset = (row - 3) * 0.006
    const lngOffset = (col - 3) * 0.006

    // Generate a score that's higher near the center
    const distanceFromCenter = Math.sqrt(Math.pow(row - 3, 2) + Math.pow(col - 3, 2))
    const baseScore = 98 - distanceFromCenter * 15
    const score = Math.max(40, Math.min(98, baseScore + (Math.random() * 15 - 7.5)))

    return {
      lat: centerLat + latOffset,
      lng: centerLng + lngOffset,
      average_percentage: score,
      final_rank: Math.ceil((100 - score) / 20) + 1,
      data: [
        {
          keyword: "fusion restaurant",
          location_rank: { rank: Math.ceil((100 - score) / 20) + 1, percentage: score },
          percentage: score,
        },
        {
          keyword: "asian european restaurant",
          location_rank: { rank: Math.ceil((100 - score) / 20) + 1, percentage: score - 3 },
          percentage: score - 3,
        },
        {
          keyword: "bistro",
          location_rank: { rank: Math.ceil((100 - score) / 20), percentage: score + 2 },
          percentage: score + 2,
        },
      ],
    }
  }),
}

export const sampleReports = [sampleReport1, sampleReport2, sampleReport3]

// Sample reports list for the reports page
export const sampleReportsList: Report[] = [
  sampleReport1.report,
  sampleReport2.report,
  sampleReport3.report,
  {
    id: 1004,
    created_at: "2025-03-18T09:30:00Z",
    business_name: "Green Thumb Garden Center",
    business_description: "Full-service garden center and nursery",
    scan_size: 7,
    grid_points: 49,
    grid_points_type: "7x7",
    grid_measurement: "km",
    file_path_id: "sample_report_1004",
    average_rank: 3.9,
  },
  {
    id: 1005,
    created_at: "2025-03-15T14:20:00Z",
    business_name: "Tech Solutions Inc.",
    business_description: "IT services and computer repair",
    scan_size: 9,
    grid_points: 81,
    grid_points_type: "9x9",
    grid_measurement: "km",
    file_path_id: "sample_report_1005",
    average_rank: 3.2,
  },
]

