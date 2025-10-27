"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <WorldMap
        dots={[
          {
            start: { lat: 9.987, lng: 76.2809 }, // Kochi, Kerala HQ
            end: { lat: 12.9716, lng: 77.5946 }, // Bangalore
          },
          {
            start: { lat: 9.987, lng: 76.2809 }, // Kochi
            end: { lat: 25.2048, lng: 55.2708 }, // Dubai, UAE
          },
          {
            start: { lat: 25.2048, lng: 55.2708 }, // Dubai
            end: { lat: 23.588, lng: 58.3829 }, // Muscat, Oman
          },
          {
            start: { lat: 25.2048, lng: 55.2708 }, // Dubai
            end: { lat: 33.3152, lng: 44.3661 }, // Baghdad, Iraq
          },
          {
            start: { lat: 25.2048, lng: 55.2708 }, // Dubai
            end: { lat: 24.7136, lng: 46.6753 }, // Riyadh, Saudi Arabia
          },
          {
            start: { lat: 12.9716, lng: 77.5946 }, // Bangalore
            end: { lat: 25.2048, lng: 55.2708 }, // Dubai
          },
        ]}
      />
    </div>
  );
}
