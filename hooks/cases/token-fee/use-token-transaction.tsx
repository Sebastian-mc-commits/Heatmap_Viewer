
import { ITokenTransactionsResponse } from '@/lib/interfaces/api/IUserTokenAPIResponse'
import { tokenFeeApi } from '@/services/api/token-usage-fee'
import { useState } from 'react'

function useTokenTransaction() {

  const [tokenTransactionData, setTokenTransactionData] = useState<ITokenTransactionsResponse>()
  const [loading, setLoading] = useState(false)

  const getUserTransactions = async () => {


    try {
      setLoading(true)
      const apiKey = await tokenFeeApi.getUserTransactions()
      setTokenTransactionData(apiKey)

      return apiKey
    }

    catch (error) {
      console.error("Error fetching API key:", error)
    }
    finally {
      setLoading(false)
    }

    return null
  }

  return {
    getUserTransactions,
    tokenTransactionData,
    setTokenTransactionData,
    loading
  }
}

export default useTokenTransaction