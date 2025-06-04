"use client"

import SvgIconFantasy from "@/components/heat-map/components/svg-fantasy-icon"
// Chart imports removed as they're no longer needed

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import useHeatMap, { type IUseMapParams } from "@/hooks/useHeatMap"
import { MergedGridPoints } from "@/lib/interfaces/api/IGridAPIResponse"

import type { IReportItem } from "@/lib/interfaces/api/IReportItemAPIResponse"
import { KeywordPerformance } from "@/lib/utils/calculateKeywordPerformance"

import { useState, useEffect } from "react"

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-5 h-5 inline-block ml-1 transition-transform duration-300"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-5 h-5 inline-block ml-1 transition-transform duration-300"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
)

interface HeatMapItemProps extends IUseMapParams {
  reportItem: IReportItem
}

function HeatMapItem({ grid_analysis_base, marker_style, reportItem }: Readonly<HeatMapItemProps>) {

  console.log("Grid analysis base: ", grid_analysis_base.average_rank_value_between)
  const { keywordPerformance, mapRef, performanceMetrics, rankDistribution } = useHeatMap({
    marker_style,
    grid_analysis_base,
    reportItem,
  })

  const [isStatsPanelOpen, setIsStatsPanelOpen] = useState(true)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const checkMobileView = () => {
      const mobile = window.innerWidth < 768
      setIsMobileView(mobile)
    }
    checkMobileView()
    window.addEventListener("resize", checkMobileView)
    return () => window.removeEventListener("resize", checkMobileView)
  }, [])

  const getRankColorClass = () => {
    const avgRank = performanceMetrics.avgRank
    if (avgRank < 8) return "bg-gradient-to-r from-emerald-600 to-emerald-400 text-white"
    if (avgRank < 15) return "bg-gradient-to-r from-amber-600 to-amber-400 text-white"
    return "bg-gradient-to-r from-red-600 to-red-400 text-white"
  }

  const keywordColors = (item: MergedGridPoints) => {

    let performanceClass = ""
    let rankValue = 0

    if (item.high_relevance >= item.medium_relevance && item.high_relevance >= item.low_relevance) {
      performanceClass = "text-emerald-600"
      rankValue = Math.floor(Math.random() * 5) + 1
    } else if (item.medium_relevance >= item.low_relevance) {
      performanceClass = "text-amber-600"
      rankValue = Math.floor(Math.random() * 5) + 6

    } else {
      performanceClass = "text-red-600"
      rankValue = Math.floor(Math.random() * 10) + 11
    }

    return {
      performanceClass,
      rankValue,
    }
  }

  const visibilityScore = Math.max(
    0,
    Math.min(100, Math.round(100 - (grid_analysis_base.average_rank_value_between / 20) * 100)),
  )

  const renderStatsCards = () => (
    <>
      {/* Map Legend - always visible */}
      <div className="absolute bottom-5 right-5 bg-white rounded-lg p-3 shadow-md z-10 max-w-[180px] md:max-w-[200px] text-xs">
        Here
        <div className="font-semibold mb-2 text-[#1e293b] border-b border-[#e2e8f0] pb-1">Map Legend</div>
        <div className="flex items-center mb-1.5">
          <div className="w-3 h-3 rounded bg-emerald-600 mr-2"></div> <span>Good (≤10)</span>
        </div>
        <div className="flex items-center mb-1.5">
          <div className="w-3 h-3 rounded bg-amber-500 mr-2"></div> <span>Medium (11-15)</span>
        </div>
        <div className="flex items-center mb-1.5">
          <div className="w-3 h-3 rounded bg-red-600 mr-2"></div> <span>Poor (&gt;15)</span>
        </div>
        <div className="flex items-center mb-1.5">
          <div className="h-0.5 w-3 bg-gradient-to-r from-orange-500 to-transparent mr-2"></div> <span>Grid Line</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full border border-orange-500 bg-transparent mr-2"></div> <span>Radius</span>
        </div>
      </div>
    </>
  )

  return (
    <div className="relative w-full h-screen bg-[#f5f7fa] overflow-hidden">
      {" "}
      {/* Main container */}
      {/* Header */}

      <div className="absolute top-0 inset-x-0 mx-auto w-11/12 md:w-3/5 bg-white rounded-b-2xl shadow-lg z-20 p-3 md:p-4 flex items-center justify-between">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-2 px-2">
            <span className="text-xs font-semibold text-gray-700">Keyword</span>
          </div>
          <div className="flex flex-col gap-1.5 max-h-[120px] overflow-y-auto">
            <div
              className="flex justify-between items-center p-1.5 rounded-lg bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] shadow-sm"
            >
              <span className="font-medium text-[#334155] text-xs">{grid_analysis_base.grid_points[0].data[0].keyword}</span>
            </div>
          </div>
        </div>
        <h1 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
          {reportItem.business_name || "Business Name"}
        </h1>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 flex-col">
            <span className="text-2xl">Average</span>
            <strong className="text-xl">Rank:</strong>
            <span className={`text-xl font-bold px-2 py-0.5 rounded-full ${keywordColors(grid_analysis_base).performanceClass}`}>
              {grid_analysis_base.average_rank_value_between.toFixed(2)}
            </span>
          </div>
          <SvgIconFantasy rank={grid_analysis_base.average_rank_value_between} size="7rem" />
        </div>
      </div>
      {/* Map Container */}
      <div className="absolute inset-0 bg-[#e8eef4] z-0">
        <div ref={mapRef} className="w-full h-full" />
      </div>
      {/* Stats Display Logic */}
      {isMobileView ? (
        <div
          className={`fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-[-2px_0px_15px_rgba(0,0,0,0.1)] z-30 transition-[max-height] duration-300 ease-in-out rounded-t-2xl overflow-hidden
                          ${isStatsPanelOpen ? "max-h-[60vh]" : "max-h-20"} `}
        >
          {/* Clickable Handle to toggle panel state */}
          <button
            type="button"
            onClick={() => setIsStatsPanelOpen(!isStatsPanelOpen)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                setIsStatsPanelOpen((prev) => !prev)
              }
            }}
            className="h-10 flex items-center justify-center cursor-pointer sticky top-0 bg-slate-100 hover:bg-slate-200 border-b border-slate-300 z-10 w-full"
            aria-expanded={isStatsPanelOpen}
            aria-controls="mobile-stats-content"
          >
            <span className="text-sm font-medium text-slate-700 flex items-center">
              {isStatsPanelOpen ? "Hide Details" : "Show Details"}
              {isStatsPanelOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </span>
          </button>

          {/* Scrollable Content Area */}
          <div
            id="mobile-stats-content"
            className="overflow-y-auto overscroll-behavior-contain"
            style={{
              height: isStatsPanelOpen ? "calc(100% - 40px)" : "0px",
            }}
          >
            <div className="p-4 flex flex-col gap-4">
              {/* Map Legend for mobile */}
              <Card className="w-full bg-white rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e293b] text-lg font-semibold pb-2 border-b border-[#f1f5f9] bg-gradient-to-r from-[#1e293b] to-[#475569] bg-clip-text text-transparent">
                    Map Legend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded bg-emerald-600 mr-2"></div>{" "}
                      <span className="text-xs">Good (≤10)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded bg-amber-500 mr-2"></div>{" "}
                      <span className="text-xs">Medium (11-15)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded bg-red-600 mr-2"></div>{" "}
                      <span className="text-xs">Poor (&gt;15)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-0.5 w-3 bg-gradient-to-r from-orange-500 to-transparent mr-2"></div>{" "}
                      <span className="text-xs">Grid Line</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-orange-500 bg-transparent mr-2"></div>{" "}
                      <span className="text-xs">Radius</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full p-0 md:p-5 pointer-events-none">
          {" "}
          {/* Container for desktop cards */}
          <div className="md:pointer-events-auto">
            {" "}
            {/* Wrapper to re-enable pointer events for cards */}
            {renderStatsCards()}
          </div>
        </div>
      )}
    </div>
  )
}

export default HeatMapItem
