

import { IDBase } from '@/lib/interfaces/api/IBaseAPIResponse'
import { IOtpSendSmsRequest, IOtpSendSmsResponse, IOtpVerifyResponse, IOtpVerifySmsRequest } from '@/lib/interfaces/api/IOtpResponse'
import { IFullReportResponse, IReportsResponse } from '@/lib/interfaces/api/IReportItemAPIResponse'
import { otpValidationApi } from '@/services/api/otpValidation'
import { reportsApi } from '@/services/api/reports-api'
import { useState } from 'react'

function useMobileVerification() {

  const [otpSendSms, setOtpSendSms] = useState<IOtpSendSmsResponse>()
  const [otpVerifySms, setOtpVerifySms] = useState<IOtpVerifyResponse>()
  const [loading, setLoading] = useState(false)

  const sendOtp = async (payload: IOtpSendSmsRequest) => {

    try {
      setLoading(true)
      const otp = await otpValidationApi.sendOtp(payload)

      setOtpSendSms(otp)
    }

    catch (error) {
      console.error("Error fetching API key:", error)
    }

    finally {
      setLoading(false)
    }
  }

  const verifyOtp = async (payload: IOtpVerifySmsRequest) => {

    try {
      setLoading(true)
      const otp = await otpValidationApi.verifyOtp(payload)

      setOtpVerifySms(otp)

    }

    catch (error) {
      console.error("Error fetching API key:", error)
    }

    finally {
      setLoading(false)
    }

  }

  const existsPhoneNumber = async (payload: IOtpSendSmsRequest) => {

    try {
      setLoading(true)
      const otp = await otpValidationApi.existsPhoneNumber(payload)

      return otp

    }

    catch (error) {
      console.error("Error fetching API key:", error)
    }

    finally {
      setLoading(false)
    }

  }

  return {
    otpSendSms,
    sendOtp,
    verifyOtp,
    setOtpSendSms,
    otpVerifySms,
    loading,
    existsPhoneNumber
  }
}

export default useMobileVerification