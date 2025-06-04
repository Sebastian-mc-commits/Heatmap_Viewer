"use client"

import { useParams } from "next/navigation"
import SEOHeatMap from "./components/SEOHeatMap"
import { IDBase } from "@/lib/interfaces/api/IBaseAPIResponse"
import { GoogleMapsProvider } from "@/providers/google-maps-provider"

export default function ReportDetailPage() {
  const params = useParams()

  return (
    <GoogleMapsProvider>
      <SEOHeatMap reportId={params.id as IDBase} />
    </GoogleMapsProvider>
  )
}

