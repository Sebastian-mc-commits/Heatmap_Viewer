import type { Middleware } from "redux"

// Actions that should trigger analytics events
const TRACKED_ACTIONS = [
  "analysis/generateHeatMap/fulfilled",
  "analysis/suggestKeywords/fulfilled",
  "reports/fetchReports/fulfilled",
  "reports/fetchReportDetails/fulfilled",
]

/**
 * Redux middleware for tracking analytics events
 */
export const analyticsMiddleware: Middleware = () => (next) => (action) => {
  // Track specific actions for analytics
  if (TRACKED_ACTIONS.includes(action.type)) {
    // In a real app, this would send data to an analytics service
    // For now, we'll just log it
    console.info(`Analytics event: ${action.type}`, {
      timestamp: new Date().toISOString(),
      actionType: action.type,
    })

    // Example of how you would track with a real analytics service:
    // if (window.gtag) {
    //   window.gtag('event', action.type, {
    //     event_category: action.type.split('/')[0],
    //     event_label: JSON.stringify(action.payload).substring(0, 100)
    //   })
    // }
  }

  return next(action)
}

