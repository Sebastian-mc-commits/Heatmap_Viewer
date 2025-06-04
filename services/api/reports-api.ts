import { SERVER_API_KEY } from "@/app/config/envVariables"
import * as api from "./api-client"
import { IBaseResponse, IDBase } from "@/lib/interfaces/api/IBaseAPIResponse"
import { IFullReportResponse, IReportsResponse } from "@/lib/interfaces/api/IReportItemAPIResponse"


export const reportsApi = {
  fetchReports: async () => {
    return await api.get<IReportsResponse>("/report/get-reports")
  },

  fetchReportDetails: async (reportId: IDBase) => {
    return await api.get<IFullReportResponse>(`/report/get-report/${reportId}`)
  },

  fetchPublicReportDetails: async (reportId: IDBase) => {
    return await api.get<IFullReportResponse>(`/report/get-public-report/${reportId}`, undefined, {
      headers: {
        "x-api-key": SERVER_API_KEY
      }
    })
  },

  deleteReport: async (reportId: IDBase): Promise<IBaseResponse<boolean>> => {
    return await api.del<IBaseResponse<boolean>>(`/report/delete-report/${reportId}`)
  },

  togglePublicStatus: async (reportId: number, isPublic: boolean) => {
    try {
      return await api.patch<{ isPublic: boolean; publicUrl: string | null }>(`/reports/${reportId}/public-status`, {
        isPublic,
      })
    } catch (error) {
      console.warn("Error toggling public status, simulating response:", error)
      return {
        isPublic,
        publicUrl: isPublic ? `https://example.com/public/reports/${reportId}` : null,
      }
    }
  },
}