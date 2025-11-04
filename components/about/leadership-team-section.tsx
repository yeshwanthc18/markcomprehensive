"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import ScrollTriggerComponent from "../animations/scroll-trigger";

const teamMembers = [
  {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    location: "New York, USA",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Visionary leader with 15+ years in architectural innovation",
    socials: {
      linkedin: "#",
      email: "jhon@company.com",
    },
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    location: "London, UK",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Expert in structural design and sustainable materials",
    socials: {
      linkedin: "#",
      email: "jane@company.com",
    },
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    location: "Singapore",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Strategic operations specialist driving global excellence",
    socials: {
      linkedin: "#",
      email: "michael@company.com",
    },
  },
  {
    name: "Sarah Johnson",
    position: "Design Director",
    location: "Paris, France",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Award-winning architect specializing in contemporary facades",
    socials: {
      linkedin: "#",
      email: "sarah@company.com",
    },
  },
  {
    name: "David Chen",
    position: "Technology Lead",
    location: "Tokyo, Japan",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Pioneering smart building integration and automation",
    socials: {
      linkedin: "#",
      email: "david@company.com",
    },
  },
  {
    name: "Emma Wilson",
    position: "Sustainability Officer",
    location: "Copenhagen, Denmark",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    bio: "Champion of eco-friendly architectural solutions",
    socials: {
      linkedin: "#",
      email: "emma@company.com",
    },
  },
];

export default function LeadershipTeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId: number;
    const scrollSpeed = 0.3;

    const autoScroll = () => {
      if (!container || isHovered.current) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const scrollingMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#01adff]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#01adff]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}

        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              <span className="text-[#01adff]">Leadership</span> Team
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
              A collective of visionaries, engineers, and designers committed to
              pushing the boundaries of architectural excellence
            </p>
          </div>
        </ScrollTriggerComponent>

        {/* Team Grid with Auto-scroll */}
        <div
          ref={scrollRef}
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
          className="flex gap-8 overflow-x-hidden pb-8"
          style={{ scrollBehavior: "auto" }}
        >
          {scrollingMembers.map((member, index) => (
            <div
              key={index}
              className="shrink-0 w-[340px] lg:w-[380px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="group rounded-md relative overflow-hidden bg-white border border-gray-200 hover:border-[#01adff]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#01adff]/10">
                {/* Image Container */}
                <div className="relative h-[420px] overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="transform transition-all duration-500 translate-y-0 group-hover:translate-y-0">
                      {/* Location */}
                      <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <MapPin className="h-4 w-4 text-[#01adff]" />
                        <span className="text-sm font-medium">
                          {member.location}
                        </span>
                      </div>

                      {/* Name & Position */}
                      <h3 className="text-2xl font-bold mb-2 tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-[#01adff] mb-3 uppercase tracking-wide">
                        {member.position}
                      </p>

                      {/* Bio */}
                      <p className="text-sm text-gray-300 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 max-h-0 group-hover:max-h-20 overflow-hidden">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                        <a
                          href={member.socials.linkedin}
                          className="p-2.5 bg-white/10 backdrop-blur-sm hover:bg-[#01adff] rounded-lg transition-all duration-300 hover:scale-110"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="p-2.5 bg-white/10 backdrop-blur-sm hover:bg-[#01adff] rounded-lg transition-all duration-300 hover:scale-110"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Top Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#01adff] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
