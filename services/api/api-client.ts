import AppError from "@/lib/classes/AppError"

// Base API client for making HTTP requests
export type ApiEnvironment = "local" | "development" | "staging" | "production" | "self"

interface ApiConfig {
  baseUrls: Record<ApiEnvironment, string>
  defaultEnvironment: ApiEnvironment
  endpoints: {
    fullAccess: string
    standardAccess: string
    download: string
  }
}

export const API_CONFIG: ApiConfig = {
  baseUrls: {
    local: "http://127.0.0.1:5600",
    development: "",
    staging: "",
    production: "",
    self: "http://localhost:3000"
  },
  defaultEnvironment: "local",
  endpoints: {
    fullAccess: "/grid/generate-map-grid-analysis-full-access",
    standardAccess: "/grid/generate-map-grid-analysis",
    download: "/download/download-file",
  },
}

interface ApiOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: Record<string, string | boolean>
  body?: any
  params?: Record<string, string>
  environment?: ApiEnvironment
}

export async function apiRequest<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = "GET", headers = {}, body, params = {}, environment = API_CONFIG.defaultEnvironment } = options

  const baseUrl = API_CONFIG.baseUrls[environment]

  const url = new URL(`${baseUrl}${endpoint}`)
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })

  const requestOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "include",
  }

  if (body) {
    requestOptions.body = JSON.stringify(body)
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000 * 60)

    requestOptions.signal = controller.signal

    const response = await fetch(url.toString(), requestOptions)

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))

      throw new AppError(errorData)

    }

    const data = await response.json()
    return data as T
  } catch (error: any) {
    if (error instanceof AppError) {
      throw error;
    } else if (error.name === "AbortError") {
      throw new AppError({
        message: "Request timed out.",
        status: 408,
        is_successful: false
      });
    } else {
      throw new AppError({
        message: error?.message || "Server Error.",
        status: 500,
        is_successful: false
      });
    }
  }
}

export function get<T>(
  endpoint: string,
  params?: Record<string, string>,
  options?: Omit<ApiOptions, "method" | "params">,
): Promise<T> {
  return apiRequest<T>(endpoint, { method: "GET", params, ...options })
}

export function post<T>(
  endpoint: string,
  body: any,
  params?: Record<string, string>,
  options?: Omit<ApiOptions, "method" | "body" | "params">,
): Promise<T> {
  return apiRequest<T>(endpoint, { method: "POST", body, params, ...options })
}

export function put<T>(
  endpoint: string,
  body: any,
  params?: Record<string, string>,
  options?: Omit<ApiOptions, "method" | "body" | "params">,
): Promise<T> {
  return apiRequest<T>(endpoint, { method: "PUT", body, params, ...options })
}

export function patch<T>(
  endpoint: string,
  body: any,
  params?: Record<string, string>,
  options?: Omit<ApiOptions, "method" | "body" | "params">,
): Promise<T> {
  return apiRequest<T>(endpoint, { method: "PATCH", body, params, ...options })
}

export function del<T>(
  endpoint: string,
  params?: Record<string, string>,
  options?: Omit<ApiOptions, "method" | "params">,
): Promise<T> {
  return apiRequest<T>(endpoint, { method: "DELETE", params, ...options })
}

// Also export as a namespace for compatibility
export const api = {
  get,
  post,
  put,
  patch,
  delete: del,
}

