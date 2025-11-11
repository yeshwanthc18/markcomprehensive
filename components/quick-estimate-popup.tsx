"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calculator, Send, X } from "lucide-react";
import { useQuickEstimate } from "@/contexts/quick-estimate-context";
import { useLenis } from "@studio-freight/react-lenis";

export default function QuickEstimatePopup() {
  const { isOpen, closePopup } = useQuickEstimate();
  const lenis = useLenis();

  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<Element | null>(null);

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
  });

  // Mount portal target
  useEffect(() => {
    setMounted(true);
    let portal = document.getElementById("portal-root");
    if (!portal) {
      portal = document.createElement("div");
      portal.id = "portal-root";
      document.body.appendChild(portal);
    }
    setPortalRoot(portal);
  }, []);

  // Stop Lenis scroll when popup open
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, lenis]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closePopup();
  };

  if (!mounted || !portalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Popup container */}
          <motion.div
            className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-5 right-5 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Scrollable form container */}
            <div
              className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-6 sm:px-10 py-10"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                  <Badge className="mb-4 bg-[#01adff]/10 text-[#01adff] px-4 py-2 font-semibold text-base">
                    <Calculator className="w-4 h-4 mr-2" />
                    Quick Estimate
                  </Badge>
                  <h3 className="text-4xl sm:text-5xl font-bold text-[#1c345c] mb-3">
                    Get Your Project Quote
                  </h3>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Share your details below to receive a precise quote within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-gray-50/80 rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm"
                >
                  {/* Services & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-[#1c345c] font-semibold">
                        Choose Your Services
                      </Label>
                      <Select
                        value={formData.services}
                        onValueChange={(v) =>
                          setFormData({ ...formData, services: v })
                        }
                      >
                        <SelectTrigger className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="z-[999]" position="popper">
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#1c345c] font-semibold">
                        Project Type
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(v) =>
                          setFormData({ ...formData, projectType: v })
                        }
                      >
                        <SelectTrigger className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="z-[999]" position="popper">
                          <SelectItem value="curtain-wall">Curtain Wall</SelectItem>
                          <SelectItem value="structural-glazing">
                            Structural Glazing
                          </SelectItem>
                          <SelectItem value="smart-glass">Smart Glass</SelectItem>
                          <SelectItem value="renovation">Renovation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Name & File Upload */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-[#1c345c] font-semibold">
                        Project Name
                      </Label>
                      <Input
                        placeholder="Enter project name"
                        className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]"
                        value={formData.projectName}
                        onChange={(e) =>
                          setFormData({ ...formData, projectName: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label className="text-[#1c345c] font-semibold">
                        Upload Drawing / Image
                      </Label>
                      <Input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="mt-2 border-gray-300 rounded-md h-12 cursor-pointer focus:ring-[#01adff] focus:border-[#01adff]"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-[#1c345c] font-semibold">
                        First Name
                      </Label>
                      <Input
                        placeholder="John"
                        className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label className="text-[#1c345c] font-semibold">
                        Last Name
                      </Label>
                      <Input
                        placeholder="Doe"
                        className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-[#1c345c] font-semibold">Email</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label className="text-[#1c345c] font-semibold">Phone</Label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Contact Method */}
                  <div>
                    <Label className="text-[#1c345c] font-semibold">
                      Preferred Contact Method
                    </Label>
                    <div className="flex flex-wrap gap-6 mt-3">
                      {["Email", "Phone", "WhatsApp"].map((method) => (
                        <label
                          key={method}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <Checkbox
                            checked={formData.contactMethod.includes(method)}
                            onCheckedChange={(checked) =>
                              setFormData((prev) => ({
                                ...prev,
                                contactMethod: checked
                                  ? [...prev.contactMethod, method]
                                  : prev.contactMethod.filter((m) => m !== method),
                              }))
                            }
                          />
                          <span className="text-sm text-gray-700">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* City & Pin */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-[#1c345c] font-semibold">City</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(v) =>
                          setFormData({ ...formData, city: v })
                        }
                      >
                        <SelectTrigger className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent className="z-[999]" position="popper">
                          <SelectItem value="dubai">Dubai</SelectItem>
                          <SelectItem value="riyadh">Riyadh</SelectItem>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="muscat">Muscat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-[#1c345c] font-semibold">
                        Pin Code
                      </Label>
                      <Input
                        placeholder="Enter pin code"
                        className="mt-2 border-gray-300 rounded-md h-12 focus:ring-[#01adff] focus:border-[#01adff]"
                        value={formData.pinCode}
                        onChange={(e) =>
                          setFormData({ ...formData, pinCode: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label className="text-[#1c345c] font-semibold">
                      Project Details
                    </Label>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      className="mt-2 border-gray-300 rounded-md focus:ring-[#01adff] focus:border-[#01adff] resize-none"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={closePopup}
                      className="flex-1 border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 rounded-md bg-gradient-to-r from-[#01adff] to-[#0096d6] text-white font-semibold py-3 shadow-md hover:shadow-lg transition-all"
                    >
                      Get Free Estimate <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-500">
                    We’ll respond within 24 hours with your detailed quote.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalRoot
  );
}
