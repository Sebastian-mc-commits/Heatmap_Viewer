"use client"

import type React from "react"
import { ReactNode, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js"
import { useGoogleMaps } from "@/providers/google-maps-provider"
import { IDBase } from "@/lib/interfaces/api/IBaseAPIResponse"
import HeatMapCarousel from "@/components/ui/heatmap-carousel"
import HeatMapItem from "../HeatMapItem"
import useReport from "@/hooks/cases/reports/use-report"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

interface LocationRank {
  percentage: number
  rank: number
}

interface SEOHeatMapParams {
  reportId: IDBase;
}

const SEOHeatMap: React.FC<SEOHeatMapParams> = ({ reportId }) => {
  const { isLoaded } = useGoogleMaps()
  const { getSingleReportData, reportDetails, loading: reportLoading } = useReport()

  useEffect(() => {

    getSingleReportData(reportId, true)
  }, [reportId])

  const heatmaps = useMemo<ReactNode[]>(() => {

    return reportDetails?.data?.global_analysis ?
      reportDetails.data.global_analysis.map((report, idx) => (
        <HeatMapItem
          key={report.id ?? idx}
          grid_analysis_base={report}
          marker_style={"STANDARD"}
          reportItem={reportDetails.data!}
        />
      ))

      :

      [(
        <div className="w-full h-screen flex items-center justify-center" key="Error">
          <Card className="w-[400px]">
            <CardHeader>
              <CardTitle>No Data Available</CardTitle>
            </CardHeader>
            <CardContent>
              <p>There is no SEO data available to display.</p>
            </CardContent>
          </Card>
        </div>
      )]
  }, [reportDetails?.data, reportId])

  if (reportLoading || !isLoaded || !reportDetails?.data) {
    return (
      <div className="w-full h-screen p-4 bg-white">
        <div className="w-full h-[300px] rounded-lg bg-gray-100 mb-4">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton className="h-[300px] rounded-lg" />
          <Skeleton className="h-[300px] rounded-lg" />
          <Skeleton className="h-[300px] rounded-lg" />
          <Skeleton className="h-[300px] rounded-lg" />
        </div>
      </div>
    )
  }

  if (!reportDetails?.data?.global_analysis) {
    return <h2>Map not found</h2>
  }

  return (

    <HeatMapCarousel childElements={heatmaps} />
  )
}

export default SEOHeatMap
