"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import { Building2, Users, Award, Globe } from "lucide-react";

const palette = {
  primary: "#01adff",
  primaryDeep: "#1c345c",
  secondary: "#001952",
};

const clientCategories = [
  {
    title: "Banking & Finance",
    icon: Building2,
    clients: [
      "National Bank of Oman",
      "Bank Muscat",
      "HSBC Middle East",
      "Standard Chartered",
      "Ahli Bank",
    ],
    projects: 45,
  },
  {
    title: "Government & Public",
    icon: Award,
    clients: [
      "Ministry of Education",
      "Royal Court Affairs",
      "Municipality Projects",
      "Public Authority",
      "Government Buildings",
    ],
    projects: 38,
  },
  {
    title: "Hospitality & Retail",
    icon: Users,
    clients: [
      "Marriott Hotels",
      "Hilton Group",
      "City Centre Malls",
      "Grand Hyatt",
      "Retail Complexes",
    ],
    projects: 52,
  },
  {
    title: "Healthcare & Education",
    icon: Globe,
    clients: [
      "Sultan Qaboos University",
      "Royal Hospital",
      "Private Schools",
      "Medical Centers",
      "Research Facilities",
    ],
    projects: 29,
  },
];

const testimonials = [
  {
    quote:
      "Mark Comprehensive delivered exceptional facade solutions for our headquarters. Their attention to detail and professional approach exceeded our expectations.",
    client: "Ahmed Al-Rashid",
    position: "Project Director",
    company: "National Bank of Oman",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote:
      "The team's expertise in architectural aluminum systems is unmatched. They transformed our vision into reality with precision and quality.",
    client: "Sarah Johnson",
    position: "Facilities Manager",
    company: "Sultan Qaboos University",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote:
      "Outstanding service from design to installation. Mark Comprehensive is our trusted partner for all facade projects across the region.",
    client: "Mohammed Hassan",
    position: "Development Manager",
    company: "City Centre Malls",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export default function ClientsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Trusted by{" "}
              <span className="text-[#01adff]">Industry Leaders</span>
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
              We're proud to serve leading organizations across banking,
              government, hospitality, healthcare, and education sectors.
            </p>
          </div>
        </ScrollTriggerComponent>

        {/* Client Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {clientCategories.map((category, index) => (
            <ScrollTriggerComponent
              key={index}
              animation="scaleIn"
              stagger={0.1}
            >
              <Card className="h-full border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6 text-center">
                  <div
                    className="mx-auto mb-4 p-4  w-fit"
                    style={{
                      backgroundColor: `${palette.primary}1A`,
                      color: palette.primary,
                    }}
                  >
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: palette.secondary }}
                  >
                    {category.title}
                  </h3>
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{ color: palette.primary }}
                  >
                    {category.projects}
                  </div>
                  <div className="text-sm text-black/60 mb-4">
                    Projects Completed
                  </div>
                  <div className="space-y-2">
                    {category.clients.slice(0, 3).map((client, clientIndex) => (
                      <div
                        key={clientIndex}
                        className="text-sm text-black/80  px-3 py-1"
                        style={{ backgroundColor: "#00000008" }}
                      >
                        {client}
                      </div>
                    ))}
                    {category.clients.length > 3 && (
                      <div className="text-xs text-black/60">
                        +{category.clients.length - 3} more
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollTriggerComponent>
          ))}
        </div>

        {/* Client Testimonials */}
        <ScrollTriggerComponent animation="fadeInUp">
          <div className=" p-12" style={{ backgroundColor: "#00000005" }}>
            <div className="text-center mb-12">
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: palette.secondary }}
              >
                What Our Clients Say
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border border-black/10 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div
                      className="text-6xl mb-4"
                      style={{ color: `${palette.primaryDeep}33` }}
                    >
                      "
                    </div>
                    <p className="text-xl leading-relaxed mb-8 italic text-black/80">
                      {testimonials[activeTestimonial].quote}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={
                          testimonials[activeTestimonial].image ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[activeTestimonial].client}
                        className="w-16 h-16  object-cover"
                      />
                      <div className="text-left">
                        <div
                          className="font-bold"
                          style={{ color: palette.secondary }}
                        >
                          {testimonials[activeTestimonial].client}
                        </div>
                        <div style={{ color: palette.primary }}>
                          {testimonials[activeTestimonial].position}
                        </div>
                        <div className="text-sm text-black/70">
                          {testimonials[activeTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`w-3 h-3  transition-all duration-300 ${
                      index === activeTestimonial ? "scale-125" : "opacity-60"
                    }`}
                    style={{
                      backgroundColor:
                        index === activeTestimonial
                          ? palette.primary
                          : "#00000033",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollTriggerComponent>

   
      </div>
    </section>
  );
}
