"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, MessageSquare } from "lucide-react"
import LocationCard from "./location-card"
import type { LocationData } from "@/lib/geoplugin"

interface ContactFormProps {
  locationData: LocationData | null
  detectedCountry: string
}

export default function ContactForm({ locationData, detectedCountry }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you within 24 hours.")
  }

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            {locationData && <LocationCard location={locationData} detectedCountry={detectedCountry} />}
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-white rounded-lg shadow-lg border border-gray-200">
              <CardHeader className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-[#01adff]" />
                  <span className="text-sm font-semibold text-[#01adff]">Contact Us</span>
                </div>
                <CardTitle className="text-3xl font-bold text-black">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600 mt-3 text-base">
                  Fill out the form and we'll respond within 24 hours with personalized guidance.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-black mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        className="bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#01adff] focus:ring-[#01adff]/20"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-black mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        className="bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#01adff] focus:ring-[#01adff]/20"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-black mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#01adff] focus:ring-[#01adff]/20"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-black mb-2 block">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#01adff] focus:ring-[#01adff]/20"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-black mb-2 block">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      className="bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#01adff] focus:ring-[#01adff]/20"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="projectType" className="text-sm font-semibold text-black mb-2 block">
                      Project Type
                    </Label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 text-black rounded-md focus:border-[#01adff] focus:ring-[#01adff]/20 transition-colors"
                      value={formData.projectType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="design">UI/UX Design</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-black mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#01adff] focus:ring-[#01adff]/20 resize-none"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#01adff] to-[#1564e5] hover:from-[#0099e6] hover:to-[#1250cc] text-white font-semibold py-6 rounded-lg group"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
