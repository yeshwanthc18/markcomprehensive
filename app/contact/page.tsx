"use client";

import type React from "react";

import { useEffect, useState, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  fetchGeoData,
  getLocationByCountry,
  getAllLocations,
  type LocationData,
  forceLocationChange,
} from "@/lib/geoplugin";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Globe,
  Award,
  CheckCircle,
  Building2,
  Shield,
  AlertCircle,
  RefreshCw,
  Loader2,
  Star,
  Zap,
  HeadphonesIcon,
  MessageSquare,
  ArrowRight,
  Target,
} from "lucide-react";
import { WorldMapDemo } from "@/components/animated/contact";
import { GlobeDemo } from "./world";


export default function ContactPage() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [detectedCountry, setDetectedCountry] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [locationError, setLocationError] = useState<string>("");
  const [retryCount, setRetryCount] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const loadLocationData = useCallback(
    async (forceReload = false) => {
      if (!forceReload && locationData && !loading) return;

      setLoading(true);
      setLocationError("");

      try {
        // console.log("🚀 Starting location detection process...");
        const geoData = await fetchGeoData();
        if (geoData && geoData.geoplugin_countryCode) {
          // console.log("✅ Geo data received:", geoData);
          const countryCode = geoData.geoplugin_countryCode;
          const countryDisplay = `${geoData.geoplugin_countryName} (${countryCode})`;

          setDetectedCountry(countryDisplay);

          const location = getLocationByCountry(countryCode);
          // console.log("🏢 Location selected:", location);
          setLocationData(location);
          setLocationError("");
        } else {
          throw new Error("No valid geolocation data received");
        }
      } catch (error) {
        console.error("❌ Location detection failed:", error);
        setLocationError("Unable to detect location automatically");

        // Fallback to UAE location
        // console.log("🇦🇪 Using fallback UAE location");
        setDetectedCountry("United Arab Emirates (Default)");
        const location = getLocationByCountry("AE");
        setLocationData(location);
      } finally {
        setLoading(false);
      }
    },
    [locationData, loading]
  );

  // Initial load
  useEffect(() => {
    loadLocationData();
  }, []);

  // Listen for forced location changes (for testing)
  useEffect(() => {
    const handleLocationChange = (event: CustomEvent) => {
      // console.log("🔄 Location change event received:", event.detail);
      setLocationData(event.detail.location);
      setDetectedCountry(event.detail.countryName);
      setLocationError("");
    };

    if (typeof window !== "undefined") {
      window.addEventListener(
        "locationChanged",
        handleLocationChange as EventListener
      );

      // Expose function for testing
      (window as any).forceLocationChange = forceLocationChange;

      return () => {
        window.removeEventListener(
          "locationChanged",
          handleLocationChange as EventListener
        );
      };
    }
  }, []);

  const handleRetryLocation = () => {
    setRetryCount((prev) => prev + 1);
    loadLocationData(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("📝 Form submitted:", formData);
    alert(
      "Thank you for your message! We will get back to you within 24 hours."
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#001952]">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-gray-800 border-t-[#01adff]   animate-spin mx-auto rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-10 bg-gradient-to-r from-[#01adff] to-[#1564e5]  flex items-center justify-center rounded-full">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Locating Your Office
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Finding your nearest Mark Comprehensive location...
          </p>
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="font-medium">
              Connecting to geolocation services
            </span>
          </div>
          {retryCount > 0 && (
            <p className="text-gray-500 mt-4 text-sm">
              Retry attempt: {retryCount}
            </p>
          )}
        </div>
      </div>
    );
  }

  const allLocations = getAllLocations();

  return (
    <div className="flex flex-col bg-white">
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-16">
            {/* Contact Information */}
            <div className="xl:col-span-2 space-y-8">
              <ScrollTriggerComponent animation="fadeInLeft">
                <div>
                  <div className=" mb-6">
                    <h2 className="text-4xl md:text-4xl font-bold tracking-tight text-black">
                      Get in <span className="text-[#01adff]">Touch</span>
                    </h2>
                    <div className="mt-4">
                      <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
                    </div>
                    <p className="mt-4 text-lg md:text-sm text-black max-w-3xl mx-auto">
                      Connect with our expert team for personalized
                      architectural solutions.
                    </p>
                  </div>

                  {locationData && (
                    <Card className="bg-white  shadow-2xl border-0 overflow-hidden mb-8 ring-1 ring-gray-200">
                      <CardHeader className="bg-[#001952] text-white p-8">
                        <CardTitle className="text-2xl font-bold flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-r from-[#01adff] to-[#1564e5] ">
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          {locationData.name}
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-lg flex items-center gap-3 mt-2">
                          Your dedicated Mark Comprehensive office
                          {/* <Badge className="bg-gradient-to-r from-[#01adff] to-[#1564e5] text-white font-semibold">
                            {locationError ? "Default" : "Auto-detected"}
                          </Badge> */}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-8 space-y-8">
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            {
                              icon: MapPin,
                              label: "Address",
                              value: locationData.address,
                            },
                            {
                              icon: Phone,
                              label: "Phone",
                              value: locationData.phone,
                            },
                            {
                              icon: Mail,
                              label: "Email",
                              value: locationData.email,
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-4 group"
                            >
                              <div className="p-4 bg-gray-100  group-hover:bg-[#01adff]/10 transition-all duration-300">
                                <item.icon className="h-6 w-6 text-black group-hover:text-[#01adff] transition-colors duration-300" />
                              </div>
                              <div>
                                <p className="font-bold text-black mb-2 text-lg">
                                  {item.label}
                                </p>
                                <p className="text-black leading-relaxed">
                                  {item.value}
                                </p>
                              </div>
                            </div>
                          ))}

                          {/* <div className="flex items-start space-x-4 group">
                            <div className="p-4 bg-gray-100  group-hover:bg-[#01adff]/10 transition-all duration-300">
                              <Clock className="h-6 w-6 text-black group-hover:text-[#01adff] transition-colors duration-300" />
                            </div>
                            <div>
                              <p className="font-bold text-black mb-2 text-lg">
                                Business Hours
                              </p>
                              <div className="text-black space-y-1">
                                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                <p>Saturday: 9:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                                <p className="text-[#01adff] font-semibold mt-3">
                                  {locationData.timezone}
                                </p>
                              </div>
                            </div>
                          </div> */}
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                          <h4 className="font-bold text-black mb-6 text-lg">
                            Local Specialties
                          </h4>
                          <div className="space-y-4">
                            {locationData.specialties
                              .slice(0, 3)
                              .map((specialty, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-4 group"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-[#01adff] to-[#1564e5]  group-hover:scale-125 transition-transform duration-300"></div>
                                  <span className="text-gray-700 font-medium group-hover:text-black transition-colors duration-300">
                                    {specialty}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </ScrollTriggerComponent>
            </div>

            {/* Enhanced Contact Form */}
            <div className="xl:col-span-3">
              <ScrollTriggerComponent animation="fadeInRight">
                <Card className="bg-white  shadow-2xl border-0 ring-1 ring-gray-200">
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#01adff]/10 ">
                        <MessageSquare className="h-6 w-6 text-[#01adff]" />
                      </div>
                      <Badge className="bg-[#01adff]/10 text-[#01adff] font-semibold px-4 py-2 border border-[#01adff]/20">
                        Priority Response
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl sm:text-2xl font-bold tracking-tight text-black">
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-black mt-4">
                      Fill out the form below and we'll get back to you within
                      24 hours with a personalized response and project
                      consultation.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-10 pt-0">
                     <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-bold text-black mb-2 block">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="h-10 text-base border border-gray-300 focus:border-[#01adff] focus:ring-0 transition-colors duration-300"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-bold text-black mb-2 block">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="h-10 text-base border border-gray-300 focus:border-[#01adff] focus:ring-0 transition-colors duration-300"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-bold text-black mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-10 text-base border border-gray-300 focus:border-[#01adff] focus:ring-0 transition-colors duration-300"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-bold text-black mb-2 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="h-10 text-base border border-gray-300 focus:border-[#01adff] focus:ring-0 transition-colors duration-300"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company" className="text-sm font-bold text-black mb-2 block">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  className="h-10 text-base border border-gray-300 focus:border-[#01adff] focus:ring-0 transition-colors duration-300"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              {/* Project Type */}
              <div>
                <Label htmlFor="projectType" className="text-sm font-bold text-black mb-2 block">
                  Project Type
                </Label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full h-10 text-base border border-gray-300 px-4 bg-white focus:border-[#01adff] focus:ring-0 transition-colors duration-300"
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option value="">Select a project type</option>
                  <option value="new-construction">New Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="consultation">Consultation</option>
                  <option value="emergency">Emergency Repair</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-bold text-black mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={2}
                  required
                  className="resize-none text-base border border-gray-300 focus:border-[#01adff] focus:ring-0 transition-colors duration-300"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-10 text-base bg-gradient-to-r from-[#01adff] to-[#1564e5] hover:from-[#0099e6] hover:to-[#1250cc] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
                <Send className="ml-3 h-5 w-5" />
              </Button>
            </form>
                  </CardContent>
                </Card>
              </ScrollTriggerComponent>
              {/* <WorldMapDemo /> */}
             
            </div>
          </div>
        </div>
      </section>
      <section>
            <GlobeDemo />
  {/* Enhanced Global Locations */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white text-black overflow-hidden">
        {/* Background dotted pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid-pattern"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" className="fill-[#01adff]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <ScrollTriggerComponent animation="fadeInUp">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                Worldwide <span className="text-[#01adff]">Presence</span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
              </div>
              <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
                With offices across 6 strategic locations, we're always close to
                your project. Your local office is highlighted for personalized
                service.
              </p>
            </div>
          </ScrollTriggerComponent>

          <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allLocations.map((location) => (
                <Card
                  key={location.id}
                  className={`bg-white  shadow-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${
                    locationData && location.id === locationData.id
                      ? "ring-2 ring-[#01adff] bg-gradient-to-br from-[#01adff]/5 to-[#1564e5]/5 shadow-[#01adff]/20"
                      : ""
                  }`}
                >
                  <CardHeader className="p-8">
                    <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight flex items-center justify-between text-black">
                      <span>{location.name}</span>
                      {locationData && location.id === locationData.id && (
                        <Badge className="bg-gradient-to-r from-[#01adff] to-[#1564e5] text-white font-bold">
                          Your Location
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-8 pt-0">
                    <div className="space-y-6">
                      {[
                        { icon: MapPin, value: location.address },
                        { icon: Phone, value: location.phone },
                        { icon: Mail, value: location.email },
                  
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 group"
                        >
                          <item.icon className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0 group-hover:text-[#01adff] transition-colors duration-300" />
                          <p className="text-black leading-relaxed group-hover:text-black transition-colors duration-300 text-sm">
                            {item.value}
                          </p>
                        </div>
                      ))}

                  
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollTriggerComponent>
        </div>
      </section>
      </section>

    

      {/* Enhanced Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-[#01adff] to-[#1564e5]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-white/20 backdrop-blur-sm ">
                <Zap className="h-10 w-10 text-white animate-pulse" />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              24/7 Quick Support
            </h3>
            <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-xl leading-relaxed font-light">
              Critical façade issues can't wait. Our emergency response team is
              available around the clock for urgent repairs and safety concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center space-x-4 text-white font-bold bg-white/20 backdrop-blur-sm  px-8 py-4 shadow-2xl text-lg">
                <Phone className="h-6 w-6" />
                <span>Emergency: +971 50 HELP (4357)</span>
              </div>
              <Badge className="bg-white text-[#01adff] px-6 py-3 text-lg font-bold">
                Available 24/7
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
