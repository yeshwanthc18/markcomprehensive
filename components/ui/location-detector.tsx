"use client"

import { useEffect } from "react"
import { forceLocationChange, type LocationData } from "@/lib/geoplugin"

interface LocationDetectorProps {
  locationData: LocationData | null
  detectedCountry: string
  locationError: string
  onLocationChange: (location: LocationData) => void
}

export default function LocationDetector({
  locationData,
  detectedCountry,
  locationError,
  onLocationChange,
}: LocationDetectorProps) {
  useEffect(() => {
    const handleLocationChange = (event: CustomEvent) => {
      console.log("🔄 LocationDetector: Location change event received:", event.detail)
      onLocationChange(event.detail.location)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("locationChanged", handleLocationChange as EventListener)

      // Expose function for testing
      ;(window as any).forceLocationChange = forceLocationChange

      return () => {
        window.removeEventListener("locationChanged", handleLocationChange as EventListener)
      }
    }
  }, [onLocationChange])

  return null // This component doesn't render anything
}
