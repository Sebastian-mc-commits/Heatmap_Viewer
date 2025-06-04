import React from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import type { GlobalAnalysis } from "@/lib/types/analysis-types"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

interface HeatMapPerformanceCardProps {
  globalAnalysis: GlobalAnalysis | null
}

const HeatMapPerformanceCard = ({ globalAnalysis }: HeatMapPerformanceCardProps) => {
  if (!globalAnalysis) {
    return (
      <Card>
        <CardHeader className="bg-muted/30 pb-3">
          <CardTitle className="text-lg">Performance Summary</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-center justify-center h-32">
            <p className="text-muted-foreground">No performance data available</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Calculate percentages
  const highPercent = (globalAnalysis.high_relevance / globalAnalysis.total_ranks) * 100
  const mediumPercent = (globalAnalysis.medium_relevance / globalAnalysis.total_ranks) * 100
  const lowPercent = (globalAnalysis.low_relevance / globalAnalysis.total_ranks) * 100

  return (
    <Card className="border border-border/50 shadow-sm">
      <CardHeader className="bg-muted/30 pb-3">
        <CardTitle className="text-lg">Performance Summary</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Average Score:</dt>
            <dd className="font-medium">{globalAnalysis.average_rank_percentage_between.toFixed(1)}%</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Average Rank:</dt>
            <dd className="font-medium">{globalAnalysis.average_rank_value_between.toFixed(1)}</dd>
          </div>

          <Separator className="my-3" />

          <div>
            <div className="flex justify-between mb-1">
              <dt className="text-sm text-muted-foreground">High Relevance:</dt>
              <dd className="text-sm font-medium">
                {globalAnalysis.high_relevance} ({highPercent.toFixed(0)}%)
              </dd>
            </div>
            <Progress value={highPercent} className="h-2 bg-muted" indicatorClassName="bg-green-500" />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <dt className="text-sm text-muted-foreground">Medium Relevance:</dt>
              <dd className="text-sm font-medium">
                {globalAnalysis.medium_relevance} ({mediumPercent.toFixed(0)}%)
              </dd>
            </div>
            <Progress value={mediumPercent} className="h-2 bg-muted" indicatorClassName="bg-yellow-500" />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <dt className="text-sm text-muted-foreground">Low Relevance:</dt>
              <dd className="text-sm font-medium">
                {globalAnalysis.low_relevance} ({lowPercent.toFixed(0)}%)
              </dd>
            </div>
            <Progress value={lowPercent} className="h-2 bg-muted" indicatorClassName="bg-red-500" />
          </div>

          <div className="flex justify-between mt-3">
            <dt className="text-muted-foreground">Total Points:</dt>
            <dd className="font-medium">{globalAnalysis.total_ranks}</dd>
          </div>
        </dl>

        <div className="mt-4 pt-4 border-t border-border/50">
          <h4 className="text-sm font-medium mb-2">Performance Trend</h4>
          <div className="h-24 w-full bg-muted/30 rounded-md flex items-end p-2">
            {/* Simulated trend bars */}
            {Array.from({ length: 12 }).map((_, i) => {
              const height = 30 + Math.random() * 50
              return <div key={i} className="flex-1 mx-0.5 bg-primary/70 rounded-t" style={{ height: `${height}%` }} />
            })}
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default React.memo(HeatMapPerformanceCard)

