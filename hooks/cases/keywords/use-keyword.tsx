
import { IApiKeyCreateRequest, IApiKeyResponse } from '@/lib/interfaces/api/IApiKeyGenerationResponse'
import { keyManagementApi } from '@/services/api/api-key'
import { useState } from 'react'

function useKeyword() {

  const [keywordData, setKeywordData] = useState<string[]>()
  const [loading, setLoading] = useState(false)

  const generateKeyword = async () => {

    try {
      setLoading(true)
      const apiKey = await keyManagementApi.getApiKey()

      setKeywordData(apiKey)
    }

    catch (error) {
      console.error("Error fetching API key:", error)
    }

    setLoading(false)
  }

  const deleteApiKey = async () => {

    try {
      setLoading(true)
      const apiKey = await keyManagementApi.deleteApiKey()

      if (apiKey.is_successful) {
        setKeywordData(undefined)
      }
    }

    catch (error) {
      console.error("Error deleting the API key:", error)
    }

    setLoading(false)
  }

  const createApiKey = async (request: IApiKeyCreateRequest): Promise<IApiKeyResponse | null> => {

    try {
      setLoading(true)
      const apiKey = await keyManagementApi.createApiKey(request)

      if (!apiKey.is_successful || !apiKey?.data) {
        console.error("Failed to create API key:", apiKey.message)
        setLoading(false)
        return null
      }

      setKeywordData(apiKey)

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
    createApiKey,
    getApiKey,
    keywordData,
    setKeywordData,
    deleteApiKey,
    loading
  }
}

export default useKeyword