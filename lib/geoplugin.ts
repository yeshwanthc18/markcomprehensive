export interface GeoPluginData {
  geoplugin_request: string
  geoplugin_status: number
  geoplugin_delay: string
  geoplugin_credit: string
  geoplugin_city: string
  geoplugin_region: string
  geoplugin_regionCode: string
  geoplugin_regionName: string
  geoplugin_areaCode: string
  geoplugin_dmaCode: string
  geoplugin_countryCode: string
  geoplugin_countryName: string
  geoplugin_inEU: number
  geoplugin_euVATrate: boolean
  geoplugin_continentCode: string
  geoplugin_continentName: string
  geoplugin_latitude: string
  geoplugin_longitude: string
  geoplugin_locationAccuracyRadius: string
  geoplugin_timezone: string
  geoplugin_currencyCode: string
  geoplugin_currencySymbol: string
  geoplugin_currencySymbol_UTF8: string
  geoplugin_currencyConverter: number
}

export interface LocationData {
  id: number
  name: string
  address: string
  phone: string
  email: string
  description: string
  specialties: string[]
  projects: string[]
  timezone: string
  languages: string[]
  certifications: string[]
}

// Enhanced location mapping with Middle East and India focus
export const locationMapping: Record<string, number> = {
  // India
  IN: 1, // India -> Kerala

  // Middle East
  AE: 3, // UAE
  OM: 4, // Oman
  IQ: 5, // Iraq
  SA: 6, // Saudi Arabia

  // Asia Pacific (mapped to Bangalore for tech hub)
  JP: 2, // Japan -> Bangalore
  KR: 2, // South Korea -> Bangalore
  CN: 2, // China -> Bangalore
  HK: 2, // Hong Kong -> Bangalore
  SG: 2, // Singapore -> Bangalore
  MY: 2, // Malaysia -> Bangalore
  TH: 2, // Thailand -> Bangalore
  VN: 2, // Vietnam -> Bangalore
  PH: 2, // Philippines -> Bangalore
  ID: 2, // Indonesia -> Bangalore
  AU: 2, // Australia -> Bangalore
  NZ: 2, // New Zealand -> Bangalore

  // Europe (mapped to UAE for business hub)
  GB: 3, // United Kingdom -> UAE
  UK: 3, // United Kingdom (alternative) -> UAE
  DE: 3, // Germany -> UAE
  FR: 3, // France -> UAE
  IT: 3, // Italy -> UAE
  ES: 3, // Spain -> UAE
  NL: 3, // Netherlands -> UAE
  BE: 3, // Belgium -> UAE
  CH: 3, // Switzerland -> UAE
  AT: 3, // Austria -> UAE
  SE: 3, // Sweden -> UAE
  NO: 3, // Norway -> UAE
  DK: 3, // Denmark -> UAE
  FI: 3, // Finland -> UAE
  PL: 3, // Poland -> UAE
  CZ: 3, // Czech Republic -> UAE
  HU: 3, // Hungary -> UAE
  PT: 3, // Portugal -> UAE
  IE: 3, // Ireland -> UAE
  GR: 3, // Greece -> UAE

  // North America (mapped to UAE)
  US: 3, // United States -> UAE
  CA: 3, // Canada -> UAE
  MX: 3, // Mexico -> UAE

  // Other Middle East countries
  QA: 3, // Qatar -> UAE
  KW: 6, // Kuwait -> Saudi Arabia
  BH: 3, // Bahrain -> UAE
  JO: 6, // Jordan -> Saudi Arabia
  LB: 3, // Lebanon -> UAE
  SY: 5, // Syria -> Iraq
  YE: 4, // Yemen -> Oman
  IR: 5, // Iran -> Iraq

  // Africa (mapped to UAE for business connections)
  ZA: 3, // South Africa -> UAE
  EG: 3, // Egypt -> UAE
  NG: 3, // Nigeria -> UAE
  KE: 3, // Kenya -> UAE

  // South America (mapped to UAE)
  BR: 3, // Brazil -> UAE
  AR: 3, // Argentina -> UAE
  CL: 3, // Chile -> UAE
  CO: 3, // Colombia -> UAE
  PE: 3, // Peru -> UAE
  VE: 3, // Venezuela -> UAE
  UY: 3, // Uruguay -> UAE
  EC: 3, // Ecuador -> UAE
}

export const locationsData: Record<number, LocationData> = {
  1: {
    id: 1,
    name: "Mark Comprehensive Kerala",
    address: "Marine Drive, Ernakulam, Kochi, Kerala 682031, India",
    phone: "+91 484 235 6789",
    email: "kerala@markcomprehensive.com",
    description:
      "Our Kerala division specializes in tropical climate façade solutions and sustainable building systems, combining traditional Kerala architecture with modern aluminum technology. We serve South India and coastal regions.",
    specialties: [
      "Tropical Climate Façades",
      "Monsoon-Resistant Systems",
      "Traditional-Modern Fusion",
      "Coastal Architecture",
    ],
    projects: [
      "Kochi IT Park Complex",
      "Trivandrum International Airport",
      "Calicut Trade Center",
      "Alappuzha Waterfront Development",
    ],
    timezone: "IST (UTC+5:30)",
    languages: ["Malayalam", "English", "Tamil", "Hindi"],
    certifications: ["IS Standards", "IGBC Green Building", "BIS Certification"],
  },
  2: {
    id: 2,
    name: "Mark Comprehensive Bangalore",
    address: "UB City Mall, Vittal Mallya Road, Bangalore, Karnataka 560001, India",
    phone: "+91 80 4567 8901",
    email: "bangalore@markcomprehensive.com",
    description:
      "Our Bangalore operations focus on high-tech commercial buildings and IT campus developments, leading innovation in smart building façade systems. We serve Karnataka, Andhra Pradesh, and tech corridors across India.",
    specialties: [
      "Smart Building Façades",
      "IT Campus Development",
      "High-Tech Commercial",
      "Energy Management Systems",
    ],
    projects: [
      "Electronic City Phase III",
      "Whitefield Tech Park",
      "Bangalore International Airport T2",
      "UB City Tower Complex",
    ],
    timezone: "IST (UTC+5:30)",
    languages: ["English", "Kannada", "Hindi", "Tamil"],
    certifications: ["IGBC Platinum", "LEED India", "IS 875 Standards"],
  },
  3: {
    id: 3,
    name: "Mark Comprehensive UAE",
    address: "Sheikh Zayed Road, Dubai International Financial Centre, Dubai, UAE",
    phone: "+971 4 567 8901",
    email: "uae@markcomprehensive.com",
    description:
      "Our UAE headquarters drives innovation in desert climate façade technology and luxury commercial developments, serving as the regional hub for Middle East and international markets.",
    specialties: ["Desert Climate Solutions", "Luxury Commercial", "High-Rise Towers", "Sandstorm Resistance"],
    projects: [
      "Burj Khalifa Maintenance",
      "Dubai Mall Extension",
      "Abu Dhabi Financial Center",
      "Sharjah Cultural District",
    ],
    timezone: "GST (UTC+4)",
    languages: ["Arabic", "English", "Hindi", "Urdu"],
    certifications: ["Emirates Green Building Council", "Dubai Municipality Approved", "ISO 9001:2015"],
  },
  4: {
    id: 4,
    name: "Mark Comprehensive Oman",
    address: "Al Khuwair, Muscat Governorate, Sultanate of Oman",
    phone: "+968 2456 7890",
    email: "oman@markcomprehensive.com",
    description:
      "Our Omani operations specialize in heritage-sensitive modern architecture and coastal building solutions, combining Islamic architectural principles with contemporary façade technology.",
    specialties: ["Heritage Architecture", "Coastal Solutions", "Islamic Design Integration", "Seismic Resistance"],
    projects: [
      "Royal Opera House Muscat",
      "Muscat International Airport",
      "Sohar Port Complex",
      "Nizwa Cultural Center",
    ],
    timezone: "GST (UTC+4)",
    languages: ["Arabic", "English", "Hindi", "Baluchi"],
    certifications: ["Oman Building Code", "GCC Standards", "LEED Middle East"],
  },
  5: {
    id: 5,
    name: "Mark Comprehensive Iraq",
    address: "Karrada District, Baghdad, Republic of Iraq",
    phone: "+964 1 789 0123",
    email: "iraq@markcomprehensive.com",
    description:
      "Our Iraqi division focuses on reconstruction projects and resilient building systems, specializing in security-enhanced façades and rapid construction techniques for urban redevelopment.",
    specialties: ["Reconstruction Projects", "Security-Enhanced Façades", "Rapid Construction", "Urban Redevelopment"],
    projects: [
      "Baghdad International Airport Renovation",
      "Basra Commercial District",
      "Erbil Business Center",
      "Mosul University Reconstruction",
    ],
    timezone: "AST (UTC+3)",
    languages: ["Arabic", "Kurdish", "English"],
    certifications: ["Iraqi Building Standards", "International Safety Standards", "UN-HABITAT Approved"],
  },
  6: {
    id: 6,
    name: "Mark Comprehensive Saudi Arabia",
    address: "King Fahd Road, Riyadh 12213, Kingdom of Saudi Arabia",
    phone: "+966 11 456 7890",
    email: "saudi@markcomprehensive.com",
    description:
      "Our Saudi Arabian operations lead mega-project developments and Vision 2030 initiatives, specializing in large-scale urban developments and sustainable desert architecture.",
    specialties: ["Mega-Project Development", "Vision 2030 Projects", "Desert Architecture", "NEOM Technology"],
    projects: ["NEOM Linear City", "King Abdullah Financial District", "Red Sea Project", "Qiddiya Entertainment City"],
    timezone: "AST (UTC+3)",
    languages: ["Arabic", "English"],
    certifications: ["SASO Standards", "Saudi Green Building Council", "MODON Approved"],
  },
}

// Multiple geolocation services for better reliability
const geoServices = [
  {
    name: "ipapi",
    url: "https://ipapi.co/json/",
    transform: (data: any): GeoPluginData => ({
      geoplugin_request: data.ip || "",
      geoplugin_status: 200,
      geoplugin_delay: "0",
      geoplugin_credit: "ipapi.co",
      geoplugin_city: data.city || "",
      geoplugin_region: data.region || "",
      geoplugin_regionCode: data.region_code || "",
      geoplugin_regionName: data.region || "",
      geoplugin_areaCode: "",
      geoplugin_dmaCode: "",
      geoplugin_countryCode: data.country_code || "",
      geoplugin_countryName: data.country_name || "",
      geoplugin_inEU: data.in_eu ? 1 : 0,
      geoplugin_euVATrate: false,
      geoplugin_continentCode: data.continent_code || "",
      geoplugin_continentName: "",
      geoplugin_latitude: data.latitude?.toString() || "",
      geoplugin_longitude: data.longitude?.toString() || "",
      geoplugin_locationAccuracyRadius: "",
      geoplugin_timezone: data.timezone || "",
      geoplugin_currencyCode: data.currency || "",
      geoplugin_currencySymbol: "",
      geoplugin_currencySymbol_UTF8: "",
      geoplugin_currencyConverter: 1,
    }),
  },
  {
    name: "ip-api",
    url: "http://ip-api.com/json/",
    transform: (data: any): GeoPluginData => ({
      geoplugin_request: data.query || "",
      geoplugin_status: data.status === "success" ? 200 : 400,
      geoplugin_delay: "0",
      geoplugin_credit: "ip-api.com",
      geoplugin_city: data.city || "",
      geoplugin_region: data.regionName || "",
      geoplugin_regionCode: data.region || "",
      geoplugin_regionName: data.regionName || "",
      geoplugin_areaCode: "",
      geoplugin_dmaCode: "",
      geoplugin_countryCode: data.countryCode || "",
      geoplugin_countryName: data.country || "",
      geoplugin_inEU: 0,
      geoplugin_euVATrate: false,
      geoplugin_continentCode: "",
      geoplugin_continentName: "",
      geoplugin_latitude: data.lat?.toString() || "",
      geoplugin_longitude: data.lon?.toString() || "",
      geoplugin_locationAccuracyRadius: "",
      geoplugin_timezone: data.timezone || "",
      geoplugin_currencyCode: "",
      geoplugin_currencySymbol: "",
      geoplugin_currencySymbol_UTF8: "",
      geoplugin_currencyConverter: 1,
    }),
  },
  {
    name: "geoplugin",
    url: "https://www.geoplugin.net/json.gp",
    transform: (data: any): GeoPluginData => data,
  },
]

export async function fetchGeoData(): Promise<GeoPluginData | null> {
  // console.log("🌍 Starting enhanced geolocation detection...")

  // Try each service in order
  for (const service of geoServices) {
    try {
      // console.log(`🔍 Trying ${service.name} service...`)
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

      const response = await fetch(service.url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0 (compatible; LocationDetector/1.0)",
        },
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      // console.log(`✅ ${service.name} response:`, data)

      const transformedData = service.transform(data)

      if (transformedData && transformedData.geoplugin_countryCode) {
        // console.log(
        //   `🎯 Successfully detected location: ${transformedData.geoplugin_countryName} (${transformedData.geoplugin_countryCode})`,
        // )
        return transformedData
      }

      throw new Error("Invalid response format")
    } catch (error) {
      console.warn(`❌ ${service.name} failed:`, error)
      continue
    }
  }

  // If all services fail, try to use a mock location for testing (default to UAE)
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    // console.log("🧪 Using mock location for localhost testing")
    return {
      geoplugin_request: "127.0.0.1",
      geoplugin_status: 200,
      geoplugin_delay: "0",
      geoplugin_credit: "mock",
      geoplugin_city: "Dubai",
      geoplugin_region: "Dubai",
      geoplugin_regionCode: "DU",
      geoplugin_regionName: "Dubai",
      geoplugin_areaCode: "",
      geoplugin_dmaCode: "",
      geoplugin_countryCode: "AE",
      geoplugin_countryName: "United Arab Emirates",
      geoplugin_inEU: 0,
      geoplugin_euVATrate: false,
      geoplugin_continentCode: "AS",
      geoplugin_continentName: "Asia",
      geoplugin_latitude: "25.2048",
      geoplugin_longitude: "55.2708",
      geoplugin_locationAccuracyRadius: "",
      geoplugin_timezone: "Asia/Dubai",
      geoplugin_currencyCode: "AED",
      geoplugin_currencySymbol: "د.إ",
      geoplugin_currencySymbol_UTF8: "د.إ",
      geoplugin_currencyConverter: 1,
    }
  }

  console.error("🚫 All geolocation services failed")
  return null
}

export function getLocationByCountry(countryCode: string): LocationData {
  // console.log(`🗺️ Getting location for country code: ${countryCode}`)
  const locationId = locationMapping[countryCode] || 3 // Default to UAE
  // console.log(`📍 Mapped to location ID: ${locationId}`)
  const location = locationsData[locationId]
  // console.log("🏢 Selected location:", location.name)
  return location
}

export function getAllLocations(): LocationData[] {
  return Object.values(locationsData)
}

// Force location change for testing (can be called from browser console)
export function forceLocationChange(countryCode: string) {
  // console.log(`🔧 Forcing location change to: ${countryCode}`)
  const location = getLocationByCountry(countryCode)

  // Dispatch custom event to notify components
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("locationChanged", {
        detail: {
          countryCode,
          location,
          countryName: `${countryCode} (Forced)`,
        },
      }),
    )
  }
  return location
}
