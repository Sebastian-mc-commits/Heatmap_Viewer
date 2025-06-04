
import { IApiKeyCreateRequest, IApiKeyResponse } from '@/lib/interfaces/api/IApiKeyGenerationResponse'
import { keyManagementApi } from '@/services/api/api-key'
import { useState } from 'react'

function useApiKey() {

  const [apiKeyData, setApiKeyData] = useState<IApiKeyResponse>()
  const [loading, setLoading] = useState(false)

  const getApiKey = async () => {

    try {
      setLoading(true)
      const apiKey = await keyManagementApi.getApiKey()

      setApiKeyData(apiKey)
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
        setApiKeyData(undefined)
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

      setApiKeyData(apiKey)

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
    apiKeyData,
    setApiKeyData,
    deleteApiKey,
    loading
  }
}

export default useApiKey