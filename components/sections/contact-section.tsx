"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ScrollTriggerComponent from "@/components/animations/scroll-trigger"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const engineeringServices = [
  "Civil Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Structural Engineering",
  "Facade Engineering",
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-[#01adff] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5  blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5  blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/20 text-white border-blue-400 px-6 py-2">Get in Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect with Our Experts</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">for Assistance Today</p>
          </div>
        </ScrollTriggerComponent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollTriggerComponent animation="fadeInLeft">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                We handle projects of every scale with precision and dedication
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                With long-term guarantees, advanced technology, and a passion for innovation, we deliver lasting value.
                Explore our diverse portfolio and let's bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 ">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-blue-100">+968 9131 5526</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 ">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-blue-100">info@markcomprehensive.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 ">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-blue-100">Muscat, Sultanate of Oman</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTriggerComponent>

          {/* Contact Form */}
          <ScrollTriggerComponent animation="fadeInRight">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        {engineeringServices.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70 min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white text-[#01adff] hover:bg-blue-50 font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollTriggerComponent>
        </div>
      </div>
    </section>
  )
}
