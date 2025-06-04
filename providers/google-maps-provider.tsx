"use client"

import { useContext, createContext, useState, useEffect, type ReactNode, useMemo } from "react"
import { useLoadScript } from "@react-google-maps/api"
import { GOOGLE_API_KEY } from "@/app/config/envVariables"
import { Library } from '@googlemaps/js-api-loader';

const libraries = ["places", "geometry"] as Library[]

interface GoogleMapsContextType {
  isLoaded: boolean
  isLoading: boolean
  error: string | null
  google: typeof google | null
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
  isLoading: true,
  error: null,
  google: null,
})

export function useGoogleMaps() {
  return useContext(GoogleMapsContext)
}

export function GoogleMapsProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { isLoaded: scriptLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
  })

  useEffect(() => {
    if (loadError) {
      setError(`Failed to load Google Maps: ${loadError.message}`)
      setIsLoading(false)
      return
    }

    if (scriptLoaded) {
      setIsLoaded(true)
      setIsLoading(false)
    }
  }, [scriptLoaded, loadError])

  const contextValue = useMemo(
    () => ({
      isLoaded,
      isLoading,
      error,
      google: scriptLoaded ? window.google : null,
    }),
    [isLoaded, isLoading, error, scriptLoaded]
  )

  return (
    <GoogleMapsContext.Provider value={contextValue}>
      {children}
    </GoogleMapsContext.Provider>
  )
}

