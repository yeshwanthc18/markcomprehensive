"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calculator, Send, X } from "lucide-react"
import { useQuickEstimate } from "@/contexts/quick-estimate-context"

export default function QuickEstimatePopup() {
  const { isOpen, closePopup } = useQuickEstimate()
  const [formData, setFormData] = useState({
    services: "",
    file: null as File | null,
    projectType: "",
    projectName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: [] as string[],
    city: "",
    pinCode: "",
    message: "",
    additionalDetails: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log("Form submitted:", formData)
    closePopup()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Popup Content */}
        <div className="p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-[#01adff]/10 text-[#01adff] px-4 py-2 font-semibold">
              <Calculator className="w-4 h-4 mr-2" />
              Quick Estimate
            </Badge>
            <h3 className="text-3xl font-bold text-[#1c345c] mb-3">Get Your Project Quote</h3>
            <p className="text-black">Fill out the form below and receive your estimate within 24 hours</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Services & Project Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="services" className="text-sm font-medium text-[#1c345c]">
                  Choose Your Services
                </Label>
                <Select
                  value={formData.services}
                  onValueChange={(value) => setFormData({ ...formData, services: value })}
                >
                  <SelectTrigger className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="installation">Installation</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="projectType" className="text-sm font-medium text-[#1c345c]">
                  Project Type
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curtain-wall">Curtain Wall</SelectItem>
                    <SelectItem value="structural-glazing">Structural Glazing</SelectItem>
                    <SelectItem value="smart-glass">Smart Glass</SelectItem>
                    <SelectItem value="renovation">Renovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Name & File Upload */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="projectName" className="text-sm font-medium text-[#1c345c]">
                  Project Name
                </Label>
                <Input
                  id="projectName"
                  placeholder="Enter project name"
                  className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]"
                  value={formData.projectName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectName: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label htmlFor="file" className="text-sm font-medium text-[#1c345c]">
                  Upload Drawing / Image
                </Label>
                <Input
                  id="file"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      file: e.target.files?.[0] || null,
                    })
                  }
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-[#1c345c]">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-[#1c345c]">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-[#1c345c]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-[#1c345c]">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Contact Method */}
            <div>
              <Label className="text-sm font-medium text-[#1c345c]">Preferred Contact Method</Label>
              <div className="flex gap-6 mt-2">
                {["Email", "Phone", "WhatsApp"].map((method) => (
                  <div key={method} className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.contactMethod.includes(method)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({
                            ...formData,
                            contactMethod: [...formData.contactMethod, method],
                          })
                        } else {
                          setFormData({
                            ...formData,
                            contactMethod: formData.contactMethod.filter((m) => m !== method),
                          })
                        }
                      }}
                    />
                    <span className="text-sm text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-sm font-medium text-[#1c345c]">
                  City
                </Label>
                <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                  <SelectTrigger className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dubai">Dubai</SelectItem>
                    <SelectItem value="riyadh">Riyadh</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="muscat">Muscat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pinCode" className="text-sm font-medium text-[#1c345c]">
                  Pin Code
                </Label>
                <Input
                  id="pinCode"
                  placeholder="Enter pin code"
                  className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff]"
                  value={formData.pinCode}
                  onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-[#1c345c]">
                Project Details
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project requirements, timeline, and any specific details..."
                rows={4}
                className="mt-1 border-gray-200 focus:border-[#01adff] focus:ring-[#01adff] resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={closePopup}
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#01adff] to-[#0096d6] text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Estimate <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              We'll respond within 24 hours with your detailed quote
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
