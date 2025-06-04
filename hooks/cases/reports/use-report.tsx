
import { IDBase } from '@/lib/interfaces/api/IBaseAPIResponse'
import { IFullReportResponse, IReportsResponse } from '@/lib/interfaces/api/IReportItemAPIResponse'
import { reportsApi } from '@/services/api/reports-api'
import { useState } from 'react'

function useReport() {

  const [reportData, setReportData] = useState<IReportsResponse>()
  const [reportDetails, setReportDetails] = useState<IFullReportResponse>()
  const [loading, setLoading] = useState(false)

  const getReports = async () => {

    try {
      setLoading(true)
      const report = await reportsApi.fetchReports()

      setReportData(report)
    }

    catch (error) {
      console.log("Error fetching reports:", (error as Error).message)
    }

    finally {
      setLoading(false)
    }
  }

  const getSingleReportData = async (id: IDBase, public_report: boolean = false) => {

    try {
      setLoading(true)

      const report = await reportsApi.fetchPublicReportDetails(id)

      if (!report.is_successful || !report?.data) {
        console.error("Failed to create API key:", report.message)
        setLoading(false)
        return null
      }

      setReportDetails(report)

    }

    catch (error) {
      console.error("Error fetching report:", (error as Error).message)
    }

    finally {
      setLoading(false)
    }

  }

  const deleteReportData = async (id: IDBase) => {

    try {

      const report = await reportsApi.deleteReport(id)

      if (!report.is_successful || !report?.data) {
        return null
      }

      return report
    }

    catch (error) {
      console.error("Error fetching report:", (error as Error).message)
    }

    return null
  }

  return {
    getSingleReportData,
    reportDetails,
    getReports,
    reportData,
    setReportData,
    loading,
    deleteReportData
  }
}

export default useReport