import React from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import type { HeatMapReport } from "@/lib/types/analysis-types"
import type { KeywordTag } from "@/lib/types/analysis-types"

interface HeatMapBusinessCardProps {
  report: HeatMapReport | null
  gridSize: string
  analysisShape: string
  selectedKeywords: KeywordTag[]
}

const HeatMapBusinessCard = ({ report, gridSize, analysisShape, selectedKeywords }: HeatMapBusinessCardProps) => {
  return (
    <Card className="border border-border/50 shadow-sm">
      <CardHeader className="bg-muted/30 pb-3">
        <CardTitle className="text-lg">Business Information</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <dl className="space-y-2">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Business:</dt>
            <dd className="font-medium">{report?.business_name || "N/A"}</dd>
          </div>
          {report?.business_description && (
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Description:</dt>
              <dd className="font-medium">{report.business_description}</dd>
            </div>
          )}
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Grid Size:</dt>
            <dd className="font-medium">{gridSize}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Shape:</dt>
            <dd className="font-medium capitalize">{analysisShape}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Keywords:</dt>
            <dd className="font-medium">{selectedKeywords.length}</dd>
          </div>
          {report?.created_at && (
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Generated:</dt>
              <dd className="font-medium">{new Date(report.created_at).toLocaleDateString()}</dd>
            </div>
          )}
        </dl>

        {selectedKeywords.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <h4 className="text-sm font-medium mb-2">Keywords</h4>
            <div className="flex flex-wrap gap-1">
              {selectedKeywords.slice(0, 10).map((keyword) => (
                <span
                  key={keyword.id}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                >
                  {keyword.text}
                </span>
              ))}
              {selectedKeywords.length > 10 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                  +{selectedKeywords.length - 10} more
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default React.memo(HeatMapBusinessCard)

