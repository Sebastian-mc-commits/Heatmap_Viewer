import { IReportItem } from '@/lib/interfaces/api/IReportItemAPIResponse';
import { MergedGridPoints } from "../interfaces/api/IGridAPIResponse"
import { IGridPointItem } from "../interfaces/api/IGridPointsAPIResponse"
import calculateKeywordPerformance from "./calculateKeywordPerformance"

const calculatePerformanceMetrics = (gridPoints: MergedGridPoints, reportItem: IReportItem) => {

  const avgRank = reportItem?.average_rank || 0


  const visibilityScore = Math.max(0, Math.min(100, Math.round(100 - (avgRank / 20) * 100)))


  let highRelevance = 0
  let mediumRelevance = 0
  let lowRelevance = 0

  const keywordPerf = calculateKeywordPerformance(gridPoints)
  highRelevance = keywordPerf.filter((k) => k.performance === "high").length
  mediumRelevance = keywordPerf.filter((k) => k.performance === "medium").length
  lowRelevance = keywordPerf.filter((k) => k.performance === "low").length

  return {
    avgRank,
    visibilityScore,
    highRelevance,
    mediumRelevance,
    lowRelevance,
  }
}

export default calculatePerformanceMetrics