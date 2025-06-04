import type { Middleware } from "redux"

/**
 * Redux middleware for logging actions and state changes
 */
export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== "production") {
    console.group(`%c Action: ${action.type}`, "color: #3498db; font-weight: bold")
    console.log("%c Previous State:", "color: #9E9E9E", store.getState())
    console.log("%c Action:", "color: #03A9F4", action)
  }

  const result = next(action)

  if (process.env.NODE_ENV !== "production") {
    console.log("%c Next State:", "color: #4CAF50", store.getState())
    console.groupEnd()
  }

  return result
}

