"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  fetchGeoData,
  getLocationByCountry,
  getAllLocations,
  type LocationData,
  forceLocationChange,
} from "@/lib/geoplugin"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import MagneticButton from "@/components/animations/magnetic-button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Globe,
  Award,
  Users,
  CheckCircle,
  Building2,
  Shield,
  AlertCircle,
  RefreshCw,
  Loader2,
  Star,
  Zap,
  HeadphonesIcon,
} from "lucide-react"

const projectTypes = [
  "Facade Glazing Systems",
  "Skylights & Smart Access",
  "Interior Solutions",
  "Doors & Windows",
  "Maintenance & Repair",
  "Consultation",
  "Emergency Service",
]

const whyChooseUs = [
  { icon: Award, text: "25+ Years Experience", color: "blue" },
  { icon: Shield, text: "ISO 9001 Certified", color: "green" },
  { icon: Zap, text: "24/7 Emergency Support", color: "orange" },
  { icon: Star, text: "Quality Guarantee", color: "purple" },
  { icon: Users, text: "Expert Team", color: "indigo" },
  { icon: CheckCircle, text: "Free Consultation", color: "emerald" },
]

export default function ContactContent() {
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [detectedCountry, setDetectedCountry] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [locationError, setLocationError] = useState<string>("")
  const [retryCount, setRetryCount] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })

  const loadLocationData = useCallback(
    async (forceReload = false) => {
      if (!forceReload && locationData && !loading) return

      setLoading(true)
      setLocationError("")

      try {
        // console.log("🚀 Starting location detection process...")
        const geoData = await fetchGeoData()
        if (geoData && geoData.geoplugin_countryCode) {
          // console.log("✅ Geo data received:", geoData)
          const countryCode = geoData.geoplugin_countryCode
          const countryDisplay = `${geoData.geoplugin_countryName} (${countryCode})`

          setDetectedCountry(countryDisplay)

          const location = getLocationByCountry(countryCode)
          // console.log("🏢 Location selected:", location)
          setLocationData(location)
          setLocationError("")
        } else {
          throw new Error("No valid geolocation data received")
        }
      } catch (error) {
        console.error("❌ Location detection failed:", error)
        setLocationError("Unable to detect location automatically")

        // Fallback to US location
        // console.log("🇺🇸 Using fallback US location")
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
  }, [])

  // Listen for forced location changes (for testing)
  useEffect(() => {
    const handleLocationChange = (event: CustomEvent) => {
      // console.log("🔄 Location change event received:", event.detail)
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

  const handleRetryLocation = () => {
    setRetryCount((prev) => prev + 1)
    loadLocationData(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log("📝 Form submitted:", formData)
    alert("Thank you for your message! We will get back to you within 24 hours.")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-blue-200 border-t-[#01adff]  animate-spin mx-auto"></div>
            <Globe className="w-8 h-8 text-[#01adff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Detecting Your Location</h3>
          <p className="text-slate-600 mb-6">Finding your nearest Mark Comprehensive office...</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Connecting to geolocation services</span>
          </div>
          {retryCount > 0 && <p className="text-xs text-slate-400 mt-4">Retry attempt: {retryCount}</p>}
        </div>
      </div>
    )
  }

  const allLocations = getAllLocations()

  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20  blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20  blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10  blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-20 opacity-10 animate-pulse">
          <Building2 className="h-16 w-16 text-white" />
        </div>
        <div className="absolute top-32 right-32 opacity-10 animate-pulse delay-1000">
          <Globe className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/3 opacity-10 animate-pulse delay-500">
          <Mail className="h-14 w-14 text-white" />
        </div>

        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <ScrollTriggerComponent animation="fadeInUp" stagger={0.2}>
                <Badge className="mb-8 bg-[#01adff]/30 text-white border-blue-400/50 px-6 py-3 text-base backdrop-blur-sm">
                  <Globe className="w-5 h-5 mr-3" />
                  Contact Our Global Team
                </Badge>

                <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8">
                  <span className="block text-white">LET'S BUILD</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                    TOGETHER
                  </span>
                </h1>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <p className="text-blue-200 text-lg font-medium">Ready to Transform Your Building?</p>
                </div>

                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mb-12">
                  Contact our local experts for a personalized consultation and competitive quote. We're here to bring
                  your architectural vision to life.
                </p>

                {/* Location Detection Status */}
                <div className="space-y-4 mb-8">
                  {detectedCountry && (
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm  px-6 py-3 text-blue-100">
                      <MapPin className="w-5 h-5 mr-3 text-blue-300" />
                      <span className="font-medium">Detected location: {detectedCountry}</span>
                    </div>
                  )}

                  {locationError && (
                    <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm  px-6 py-3 text-red-100">
                      <AlertCircle className="w-5 h-5 mr-3 text-red-300" />
                      <span className="font-medium">{locationError}</span>
                      <Button
                        onClick={handleRetryLocation}
                        size="sm"
                        className="ml-3 bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <MagneticButton>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#01adff] to-purple-600 hover:from-[#01adff] hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-0"
                    >
                      <a href="#contact-form">Get Free Quote</a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg backdrop-blur-sm bg-white/5 hover:border-white/50 transition-all duration-300"
                    >
                      <HeadphonesIcon className="mr-2 h-5 w-5" />
                      Emergency Support
                    </Button>
                  </MagneticButton>
                </div>
              </ScrollTriggerComponent>
            </div>

            {/* Why Choose Us Sidebar */}
            <div className="lg:col-span-4">
              <ScrollTriggerComponent animation="fadeInRight" stagger={0.1}>
                <div className="bg-white/10 backdrop-blur-lg  p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Mark Comprehensive?</h3>
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 group">
                        <div
                          className={`p-3 bg-${item.color}-500/20  group-hover:bg-${item.color}-500/30 transition-colors`}
                        >
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-blue-100 font-medium group-hover:text-white transition-colors">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="text-white/60 text-sm">Scroll to contact</div>
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="xl:col-span-1 space-y-8">
              <ScrollTriggerComponent animation="fadeInLeft">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Get in Touch</h2>

                  {locationData && (
                    <Card className="overflow-hidden mb-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl">
                      <CardHeader>
                        <CardTitle className="text-[#01adff] flex items-center gap-3">
                          <div className="p-2 bg-[#01adff] ">
                            <MapPin className="h-5 w-5 text-white" />
                          </div>
                          {locationData.name}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <span className="text-[#01adff]">Your local Mark Comprehensive office</span>
                          <Badge className="bg-[#01adff] text-white text-xs">
                            {locationError ? "Default" : "Auto-detected"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-[#01adff]/10 ">
                              <MapPin className="h-5 w-5 text-[#01adff]" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 mb-1">Address</p>
                              <p className="text-slate-600 text-sm leading-relaxed">{locationData.address}</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-[#01adff]/10 ">
                              <Phone className="h-5 w-5 text-[#01adff]" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 mb-1">Phone</p>
                              <p className="text-slate-600 text-sm">{locationData.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-[#01adff]/10 ">
                              <Mail className="h-5 w-5 text-[#01adff]" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 mb-1">Email</p>
                              <p className="text-slate-600 text-sm">{locationData.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-[#01adff]/10 ">
                              <Clock className="h-5 w-5 text-[#01adff]" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 mb-1">Business Hours</p>
                              <div className="text-slate-600 text-sm space-y-1">
                                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                <p>Saturday: 9:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                                <p className="text-[#01adff] font-medium mt-2">{locationData.timezone}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-6 border-t border-blue-200">
                          <h4 className="font-semibold text-slate-900 mb-4">Local Specialties</h4>
                          <div className="space-y-3">
                            {locationData.specialties.slice(0, 3).map((specialty, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span className="text-slate-700 text-sm font-medium">{specialty}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Emergency Contact Card */}
                  <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-red-800">
                        <div className="p-2 bg-red-600 ">
                          <AlertCircle className="h-5 w-5 text-white" />
                        </div>
                        Emergency Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-700 mb-4 text-sm">
                        Need immediate assistance? Our emergency response team is available 24/7.
                      </p>
                      <div className="flex items-center space-x-3 text-red-800 font-semibold">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">+1 (212) 555-HELP</span>
                        <Badge className="bg-red-600 text-white text-xs">24/7</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollTriggerComponent>
            </div>

            {/* Contact Form */}
            <div className="xl:col-span-2">
              <ScrollTriggerComponent animation="fadeInRight">
                <Card className="shadow-2xl border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-slate-900">Send us a Message</CardTitle>
                    <p className="text-slate-600 text-lg">
                      Fill out the form below and we'll get back to you within 24 hours with a personalized response.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700 mb-2 block">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="h-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700 mb-2 block">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="h-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2 block">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="h-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-sm font-semibold text-slate-700 mb-2 block">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="h-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-sm font-semibold text-slate-700 mb-2 block">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          className="h-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <Label htmlFor="projectType" className="text-sm font-semibold text-slate-700 mb-2 block">
                          Project Type
                        </Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                          <SelectTrigger className="h-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-slate-300">
                            <SelectValue placeholder="Select a project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-2 block">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>

                      <MagneticButton>
                        <Button
                          type="submit"
                          className="w-full h-14 text-lg bg-gradient-to-r from-[#01adff] to-purple-600 hover:from-[#01adff] hover:to-purple-700 text-white font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-0"
                        >
                          Send Message
                          <Send className="ml-3 h-5 w-5" />
                        </Button>
                      </MagneticButton>
                    </form>
                  </CardContent>
                </Card>
              </ScrollTriggerComponent>
            </div>
          </div>
        </div>
      </section>

      {/* Global Locations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollTriggerComponent animation="fadeInUp">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 py-2">Global Network</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Worldwide Presence</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                With offices across 6 countries, we're always close to your project. Your local office is highlighted
                for personalized service.
              </p>
            </div>
          </ScrollTriggerComponent>

          <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allLocations.map((location) => (
                <Card
                  key={location.id}
                  className={`transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg ${
                    locationData && location.id === locationData.id
                      ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl"
                      : "bg-white"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={`text-xl font-bold flex items-center justify-between ${
                        locationData && location.id === locationData.id ? "text-[#01adff]" : "text-slate-900"
                      }`}
                    >
                      <span>{location.name}</span>
                      {locationData && location.id === locationData.id && (
                        <Badge className="bg-[#01adff] text-white">Your Location</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-slate-400 mt-1 flex-shrink-0" />
                        <p className="text-slate-600 leading-relaxed">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        <p className="text-slate-600">{location.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        <p className="text-slate-600">{location.email}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-slate-400 flex-shrink-0" />
                        <p className="text-slate-600">{location.timezone}</p>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wide">Languages:</p>
                        <div className="flex flex-wrap gap-2">
                          {location.languages.map((lang, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollTriggerComponent>
        </div>
      </section>
    </div>
  )
}
