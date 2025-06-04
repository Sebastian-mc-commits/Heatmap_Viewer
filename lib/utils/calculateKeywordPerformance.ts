import { MergedGridPoints } from "../interfaces/api/IGridAPIResponse"

export interface KeywordPerformance {
  keyword: string
  avgRank: number
  performance: "high" | "medium" | "low"
}

const calculateKeywordPerformance = (gridPoints: MergedGridPoints) => {
  const keywords = new Set<string>()
  const keywordRanks: Record<string, number[]> = {}

  gridPoints.grid_points.forEach((location) => {
    location.data.forEach((item) => {
      keywords.add(item.keyword)

      if (!keywordRanks[item.keyword]) {
        keywordRanks[item.keyword] = []
      }
      keywordRanks[item.keyword].push(item.location_rank.rank)
    })
  })

  const performance: KeywordPerformance[] = []
  keywords.forEach((keyword) => {
    const ranks = keywordRanks[keyword]
    const avgRank = ranks.reduce((sum, rank) => sum + rank, 0) / ranks.length

    let performanceLevel: "high" | "medium" | "low"
    if (avgRank <= 10) {
      performanceLevel = "high"
    } else if (avgRank <= 15) {
      performanceLevel = "medium"
    } else {
      performanceLevel = "low"
    }

    performance.push({
      keyword,
      avgRank,
      performance: performanceLevel,
    })
  })

  return performance
}

export default calculateKeywordPerformance