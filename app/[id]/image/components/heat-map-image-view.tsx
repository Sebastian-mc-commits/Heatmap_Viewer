"use client"

import { useRef, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Share2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import ErrorBoundary from "@/components/error-boundary"
import { useHeatMapData } from "@/hooks/use-heat-map-data"
import HeatMapRenderer from "@/components/heat-map/heat-map-renderer"
import { useAppSelector } from "@/store/hooks"
import HeatMapControls from "@/components/heat-map/components/heat-map-controls"
import HeatMapPerformanceCard from "./heat-map-performance-card"
import HeatMapBusinessCard from "./heat-map-business-card"

interface HeatMapImageViewProps {
  reportId: number
}

export default function HeatMapImageView({ reportId }: HeatMapImageViewProps) {
  const router = useRouter()
  const { toast } = useToast()

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [renderComplete, setRenderComplete] = useState(false)
  const [hideInsights, setHideInsights] = useState(false)

  // Get data from our custom hook
  const { report, globalAnalysis, heatMapData, isLoading, error } = useHeatMapData(reportId)

  // Get settings from Redux
  const { heatmapStyle, themeColor } = useAppSelector((state) => state.settings)
  const { gridSize, spacingKm, selectedKeywords, analysisShape } = useAppSelector((state) => state.analysis)

  // Handle render complete
  const handleRenderComplete = useCallback(() => {
    setRenderComplete(true)
  }, [])

  // Download the image
  const downloadImage = useCallback(() => {
    if (!canvasRef.current) return

    try {
      const canvas = canvasRef.current
      const image = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = image
      link.download = `heatmap-${report?.business_name || "analysis"}-${new Date().toISOString().split("T")[0]}.png`
      link.click()

      toast({
        title: "Image Downloaded",
        description: "Your heatmap analysis has been saved as an image.",
      })
    } catch (error) {
      console.error("Error downloading image:", error)
      toast({
        title: "Download Failed",
        description: "There was an error downloading the image. Please try again.",
        variant: "destructive",
      })
    }
  }, [report, toast])

  // Share the image
  const shareImage = useCallback(async () => {
    if (!canvasRef.current) return

    try {
      const canvas = canvasRef.current
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob)
          else throw new Error("Could not create image blob")
        }, "image/png")
      })

      if (navigator.share) {
        await navigator.share({
          title: `Heat Map Analysis: ${report?.business_name || "Business"}`,
          text: "Check out this heat map analysis from Local Dominator",
          files: [new File([blob], "heatmap.png", { type: "image/png" })],
        })

        toast({
          title: "Image Shared",
          description: "Your heatmap analysis has been shared.",
        })
      } else {
        // Fallback if Web Share API is not supported
        downloadImage()
      }
    } catch (error) {
      console.error("Error sharing image:", error)
      toast({
        title: "Share Failed",
        description: "There was an error sharing the image. Please try downloading instead.",
        variant: "destructive",
      })
    }
  }, [report, downloadImage, toast])

  // Toggle insights
  const toggleInsights = useCallback(() => {
    setHideInsights(!hideInsights)
  }, [hideInsights])

  return (
    <ErrorBoundary>
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Report
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={downloadImage} disabled={!renderComplete || isLoading}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm" onClick={shareImage} disabled={!renderComplete || isLoading}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/50">
            <CardTitle>Heat Map Image View</CardTitle>
          </CardHeader>
          <CardContent className="p-0 relative" ref={containerRef}>
            {isLoading ? (
              <div className="flex items-center justify-center h-[600px]">
                <div className="flex flex-col items-center">
                  <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
                  <p className="mt-4 text-lg font-medium">Loading heat map data...</p>
                </div>
              </div>
            ) : (
              <div className="relative bg-card">
                <div className="w-full" style={{ minHeight: "600px" }}>
                  <HeatMapRenderer
                    width={800}
                    height={600}
                    gridSize={gridSize}
                    analysisShape={analysisShape}
                    heatmapStyle={heatmapStyle}
                    themeColor={themeColor}
                    heatMapData={heatMapData}
                    onRenderComplete={handleRenderComplete}
                  />
                  <canvas ref={canvasRef} className="hidden" width={800} height={600} />
                </div>

                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-primary/20 text-primary px-3 py-1.5">Style: {heatmapStyle}</Badge>
                </div>

                {/* Controls for toggling insights */}
                <HeatMapControls
                  onViewImage={() => {}}
                  onToggleInsights={toggleInsights}
                  onDownload={downloadImage}
                  onShare={shareImage}
                  hideInsights={hideInsights}
                  renderComplete={renderComplete}
                  showExportButtons={true}
                />
              </div>
            )}
          </CardContent>
        </Card>

        {!hideInsights && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <HeatMapBusinessCard
              report={report}
              gridSize={gridSize}
              analysisShape={analysisShape}
              selectedKeywords={selectedKeywords}
            />

            <HeatMapPerformanceCard globalAnalysis={globalAnalysis} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
}

