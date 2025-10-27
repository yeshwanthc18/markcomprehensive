"use client";

import { useState } from "react";
import Image from "@/components/SmartImage";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Dubai Marina Tower",
    region: "Middle East",
    description:
      "State-of-the-art curtain wall system with integrated smart glass technology for this 80-story residential tower.",
    completionDate: "2024",
    projectType: "High-Rise Residential",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "London Financial District",
    region: "Europe",
    description:
      "Innovative aluminum facade system with energy-efficient glazing for a premium commercial complex.",
    completionDate: "2024",
    projectType: "Commercial Complex",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Singapore Tech Hub",
    region: "Asia Pacific",
    description:
      "Advanced structural glazing with automated skylight systems for this cutting-edge technology center.",
    completionDate: "2024",
    projectType: "Technology Center",
  },
];
export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const { image, title, description } = projects[index];

  return (
    <div className="grid grid-cols-1 container md:grid-cols-2 items-center gap-8 px-8 py-16">
      {/* Left Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover "
        />

        {/* Prev / Next Buttons */}
        <div className="absolute bottom-4 left-4 flex gap-4 bg-white px-4 py-2 shadow-md">
          <button
            onClick={handlePrev}
            className="text-sm font-semibold hover:text-gray-600"
          >
            PREV
          </button>
          <button
            onClick={handleNext}
            className="text-sm font-semibold hover:text-gray-600"
          >
            NEXT
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <p className="text-xs uppercase tracking-wide mb-2">Work</p>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>

        <button className="flex items-center gap-2 text-sm font-semibold hover:underline">
          SEE PROJECTS <ArrowRight size={18} className="text-lime-500" />
        </button>
      </div>
    </div>
  );
}
