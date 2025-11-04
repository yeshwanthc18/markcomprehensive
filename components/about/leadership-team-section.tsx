"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Linkedin,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ScrollTriggerComponent from "../animations/scroll-trigger";

const teamMembers = [
  {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    location: "New York, USA",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Visionary leader with 15+ years in architectural innovation",
    socials: { linkedin: "#", email: "jhon@company.com" },
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    location: "London, UK",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Expert in structural design and sustainable materials",
    socials: { linkedin: "#", email: "jane@company.com" },
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    location: "Singapore",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Strategic operations specialist driving global excellence",
    socials: { linkedin: "#", email: "michael@company.com" },
  },
  {
    name: "Sarah Johnson",
    position: "Design Director",
    location: "Paris, France",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Award-winning architect specializing in contemporary facades",
    socials: { linkedin: "#", email: "sarah@company.com" },
  },
  {
    name: "David Chen",
    position: "Technology Lead",
    location: "Tokyo, Japan",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Pioneering smart building integration and automation",
    socials: { linkedin: "#", email: "david@company.com" },
  },
  {
    name: "Emma Wilson",
    position: "Sustainability Officer",
    location: "Copenhagen, Denmark",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Champion of eco-friendly architectural solutions",
    socials: { linkedin: "#", email: "emma@company.com" },
  },
];

export default function LeadershipTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-[#01adff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-[#01adff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="text-[#01adff]">Leadership</span> Team
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-32 h-[2px] bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the brilliant minds redefining architecture through design,
              innovation, and sustainable engineering.
            </p>
          </div>
        </ScrollTriggerComponent>

        {/* Carousel */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-full overflow-hidden h-[520px]">
            {teamMembers.map((member, index) => {
              // Calculate circular offset
              const offset =
                (index - activeIndex + teamMembers.length) %
                teamMembers.length;

              let translateX = 0;
              let scale = 1;
              let zIndex = 0;
              let opacity = 0;

              if (offset === 0) {
                // Active (center)
                translateX = 0;
                scale = 1.05;
                zIndex = 30;
                opacity = 1;
              } else if (offset === 1) {
                // Next (right)
                translateX = 320;
                scale = 0.9;
                zIndex = 20;
                opacity = 0.6;
              } else if (offset === teamMembers.length - 1) {
                // Previous (left)
                translateX = -320;
                scale = 0.9;
                zIndex = 20;
                opacity = 0.6;
              } else {
                // Others (hidden)
                translateX = offset > 1 ? 600 : -600;
                scale = 0.7;
                zIndex = 10;
                opacity = 0;
              }

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                >
                  <Card className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-md shadow-[0_8px_30px_rgb(1,173,255,0.08)] hover:shadow-[0_15px_50px_rgb(1,173,255,0.15)] transition-all duration-700 w-[320px] sm:w-[380px]">
                    <div className="relative h-[440px] overflow-hidden rounded-t-2xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000]/80 via-[#000]/30 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="space-y-3 transition-all duration-700">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <MapPin className="h-4 w-4 text-[#01adff]" />
                            <span>{member.location}</span>
                          </div>
                          <h3 className="text-2xl font-semibold tracking-tight">
                            {member.name}
                          </h3>
                          <p className="text-sm uppercase text-[#01adff] font-semibold tracking-wide">
                            {member.position}
                          </p>

                          {offset === 0 && (
                            <>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {member.bio}
                              </p>
                              <div className="flex gap-3 mt-3">
                                <a
                                  href={member.socials.linkedin}
                                  className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg hover:bg-[#01adff] hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                  <Linkedin className="h-4 w-4" />
                                </a>
                                <a
                                  href={`mailto:${member.socials.email}`}
                                  className="p-2.5 bg-white/10 backdrop-blur-md rounded-lg hover:bg-[#01adff] hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                  <Mail className="h-4 w-4" />
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center mt-16 gap-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-[#01adff]/30 shadow-md hover:bg-[#01adff] hover:text-white transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-[#01adff]/30 shadow-md hover:bg-[#01adff] hover:text-white transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
