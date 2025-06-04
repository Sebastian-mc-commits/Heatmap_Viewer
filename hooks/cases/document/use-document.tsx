
import { IDocumentRequestBase } from '@/lib/interfaces/api/IDocumentAPIResponse'
import { IUserWithDocumentsValidationResponse } from '@/lib/interfaces/api/IUserAPIResponse'
import { signDocument } from '@/services/api/sign-document'
import { useState } from 'react'

function useDocument() {

  const [documentUrl, setDocumentUrl] = useState<string>()
  const [userDocuments, setUserDocuments] = useState<IUserWithDocumentsValidationResponse>()
  const [loading, setLoading] = useState(false)

  const getDocument = async () => {

    try {
      setLoading(true)
      const doc = await signDocument.getDocument()
      setDocumentUrl(doc!)

      return doc
    }

    catch (error) {
      console.error("Error fetching API key:", error)
    }
    finally {
      setLoading(false)
    }

    return null
  }

  const getUserDocuments = async () => {

    try {
      setLoading(true)
      const doc = await signDocument.getUserDocuments()
      setUserDocuments(doc)

      return doc
    }

    catch (error) {
      console.error("Error fetching:", error)
    }
    finally {
      setLoading(false)
    }

    return null
  }

  const createSession = async (payload: IDocumentRequestBase) => {

    try {
      setLoading(true)
      const doc = await signDocument.createSession(payload)

      return doc
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
    getDocument,
    documentUrl,
    setDocumentUrl,
    createSession,
    getUserDocuments,
    userDocuments,
    loading
  }
}

export default useDocument