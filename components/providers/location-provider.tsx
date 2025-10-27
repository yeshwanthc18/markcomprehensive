"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { fetchGeoData, getLocationByCountry, forceLocationChange, type LocationData } from "@/lib/geoplugin"

interface LocationContextType {
  locationData: LocationData | null
  detectedCountry: string
  loading: boolean
  locationError: string
  retryLocation: () => void
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

export function useLocationContext() {
  const context = useContext(LocationContext)
  if (context === undefined) {
    throw new Error("useLocationContext must be used within a LocationProvider")
  }
  return context
}

interface LocationProviderProps {
  children: ReactNode
}

export function LocationProvider({ children }: LocationProviderProps) {
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [detectedCountry, setDetectedCountry] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [locationError, setLocationError] = useState<string>("")

  const loadLocationData = useCallback(
    async (forceReload = false) => {
      if (!forceReload && locationData && !loading) return

      setLoading(true)
      setLocationError("")

      try {
        // console.log("🚀 LocationProvider: Starting location detection...")
        const geoData = await fetchGeoData()

        if (geoData && geoData.geoplugin_countryCode) {
          // console.log("✅ LocationProvider: Geo data received:", geoData)
          const countryCode = geoData.geoplugin_countryCode
          const countryDisplay = `${geoData.geoplugin_countryName} (${countryCode})`

          setDetectedCountry(countryDisplay)
          const location = getLocationByCountry(countryCode)
          // console.log("🏢 LocationProvider: Location selected:", location)
          setLocationData(location)
          setLocationError("")
        } else {
          throw new Error("No valid geolocation data received")
        }
      } catch (error) {
        console.error("❌ LocationProvider: Location detection failed:", error)
        setLocationError("Unable to detect location automatically")

        // Fallback to US location
        // console.log("🇺🇸 LocationProvider: Using fallback US location")
        setDetectedCountry("United States (Default)")
        const location = getLocationByCountry("US")
        setLocationData(location)
      } finally {
        setLoading(false)
      }
    },
    [locationData, loading],
  )

  // Initial load
  useEffect(() => {
    loadLocationData()
  }, [loadLocationData])

  // Listen for forced location changes (for testing)
  useEffect(() => {
    const handleLocationChange = (event: CustomEvent) => {
      // console.log("🔄 LocationProvider: Location change event received:", event.detail)
      setLocationData(event.detail.location)
      setDetectedCountry(event.detail.countryName)
      setLocationError("")
    }

    if (typeof window !== "undefined") {
      window.addEventListener("locationChanged", handleLocationChange as EventListener)

      // Expose function for testing
      ;(window as any).forceLocationChange = forceLocationChange

      return () => {
        window.removeEventListener("locationChanged", handleLocationChange as EventListener)
      }
    }
  }, [])

  const retryLocation = useCallback(() => {
    loadLocationData(true)
  }, [loadLocationData])

  const value = {
    locationData,
    detectedCountry,
    loading,
    locationError,
    retryLocation,
  }

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}
