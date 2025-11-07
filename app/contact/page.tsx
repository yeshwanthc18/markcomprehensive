"use client"

import ContactBanner from "@/components/contact/contact-banner"
import ContactForm from "@/components/contact/contact-form"
import GlobalLocations from "@/components/contact/global-locations"
import { useState, useEffect, useCallback } from "react"
import { Loader2, Globe } from "lucide-react"
import { fetchGeoData, getLocationByCountry, getAllLocations, type LocationData } from "@/lib/geoplugin"
import GradientBG from "@/components/animated/background-white-gradient"

export default function ContactPage() {
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [detectedCountry, setDetectedCountry] = useState<string>("")
  const [loading, setLoading] = useState(true)

  const loadLocationData = useCallback(
    async (forceReload = false) => {
      if (!forceReload && locationData && !loading) return

      setLoading(true)
      try {
        const geoData = await fetchGeoData()
        if (geoData?.geoplugin_countryCode) {
          const countryCode = geoData.geoplugin_countryCode
          setDetectedCountry(`${geoData.geoplugin_countryName} (${countryCode})`)
          setLocationData(getLocationByCountry(countryCode))
        } else {
          throw new Error("No valid geolocation data")
        }
      } catch {
        setDetectedCountry("United Arab Emirates (Default)")
        setLocationData(getLocationByCountry("AE"))
      } finally {
        setLoading(false)
      }
    },
    [locationData, loading],
  )

  useEffect(() => {
    loadLocationData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#001952]">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-gray-800 border-t-[#01adff] animate-spin mx-auto rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-10 bg-gradient-to-r from-[#01adff] to-[#1564e5] flex items-center justify-center rounded-full">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Locating Your Office</h3>
          <p className="text-gray-300 mb-6 text-lg">Finding your nearest office...</p>
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="font-medium">Connecting to geolocation</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <GradientBG>
        <ContactBanner />
      </GradientBG>
      <ContactForm locationData={locationData} detectedCountry={detectedCountry} />
      <GradientBG>
        <GlobalLocations allLocations={getAllLocations()} currentLocation={locationData} />
      </GradientBG>
    </div>
  )
}
