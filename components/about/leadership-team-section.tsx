"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Share2 } from "lucide-react";

const teamMembers = [
  {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
 {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
 {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
 {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
 {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
 {
    name: "Jhon Doe",
    position: "Chief Executive Officer",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Jane Smith",
    position: "Head of Engineering",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Michael Brown",
    position: "Operations Director",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
  },

];

export default function LeadershipTeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const scrollSpeed = 0.5; // px per frame

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId: number;

    const autoScroll = () => {
      if (!container) return;
      if (!isHovered.current) {
        container.scrollLeft += scrollSpeed;

        // Infinite seamless scroll by duplicating content
        if (
          container.scrollLeft >=
          container.scrollWidth / 2
        ) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate team members for seamless scroll
  const scrollingMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Meet Our <span className="text-[#01adff]">Team</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            A powerhouse of visionaries and industry experts shaping the
            future of aluminum and glass innovation.
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
          className="flex gap-8 overflow-x-hidden pb-6"
          style={{ scrollBehavior: "auto" }}
        >
          {scrollingMembers.map((member, index) => (
            <div key={index} className="shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
              <Card className="group relative overflow-hidden bg-transparent shadow-none border-none">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    {[Facebook, Instagram, Linkedin, Share2].map((Icon, i) => (
                      <button
                        key={i}
                        className="p-2 bg-black text-white hover:bg-[#01adff] transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-black/5 py-4 px-6 text-center">
                  <h3 className="text-lg font-bold text-black">{member.name}</h3>
                  <p className="text-sm text-black/70">{member.position}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
