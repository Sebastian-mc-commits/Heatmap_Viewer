import { MergedGridPoints } from "../interfaces/api/IGridAPIResponse"

const calculateRankDistribution = (gridPoints: MergedGridPoints) => {
  const distribution = {
    "1-5": 0,
    "6-10": 0,
    "11-15": 0,
    "16-20": 0,
    "20+": 0,
  }

  gridPoints.grid_points.forEach((location) => {
    location.data.forEach((item) => {
      const rank = item.location_rank.rank
      if (rank <= 5) distribution["1-5"]++
      else if (rank <= 10) distribution["6-10"]++
      else if (rank <= 15) distribution["11-15"]++
      else if (rank <= 20) distribution["16-20"]++
      else distribution["20+"]++
    })
  })

  return distribution
}

export default calculateRankDistribution