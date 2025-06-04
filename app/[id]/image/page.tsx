import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import HeatMapImageView from "./components/heat-map-image-view"

export default function ImagePage({ params }: { params: { id: string } }) {
  const reportId = Number.parseInt(params.id, 10)

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center">
            <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
            <p className="mt-4 text-lg font-medium">Loading heat map image...</p>
          </div>
        </div>
      }
    >
      <HeatMapImageView reportId={reportId} />
    </Suspense>
  )
}

