"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowLeft, ArrowRight, MapPinCheck, MapPinned } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { LocationData } from "@/lib/geoplugin";
import { FaMap } from "react-icons/fa";

interface GlobalLocationsProps {
  allLocations: LocationData[];
  currentLocation: LocationData | null;
}

export default function GlobalLocations({
  allLocations,
  currentLocation,
}: GlobalLocationsProps) {
  // Add coordinates for map
  const locationsWithCoords = allLocations.map((loc) => {
    switch (loc.name) {
      case "Mark Comprehensive Kerala":
        return { ...loc, mapX: 52.5, mapY: 74 };
      case "Mark Comprehensive Bangalore":
        return { ...loc, mapX: 52.5, mapY: 72 };
      case "Mark Comprehensive UAE":
        return { ...loc, mapX: 42.5, mapY: 67.5 };
      case "Mark Comprehensive Oman":
        return { ...loc, mapX: 43, mapY: 70 };
      case "Mark Comprehensive Iraq":
        return { ...loc, mapX: 38, mapY: 63 };
      case "Mark Comprehensive Saudi Arabia":
        return { ...loc, mapX: 38, mapY: 68 };
      default:
        return { ...loc, mapX: 52.5, mapY: 74 };
    }
  });

  // ✅ Default stable selection
  const [selected, setSelected] = useState<LocationData & { mapX?: number; mapY?: number } | null>(null);
  const [page, setPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(locationsWithCoords.length / itemsPerPage);

  const paginatedLocations = locationsWithCoords.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  // ✅ Set default only once, on mount (fix reload issue)
useEffect(() => {
  if (currentLocation) {
    // Find matching location by ID or name
    const found = locationsWithCoords.find(
      (loc) => loc.id === currentLocation.id || loc.name === currentLocation.name
    );

    // Set selected safely
    if (found) {
      setSelected(found);
    } else {
      setSelected(locationsWithCoords[0]);
    }
  } else if (!selected) {
    setSelected(locationsWithCoords[0]);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [currentLocation, locationsWithCoords.length]);


  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ---------- LEFT SIDE: LOCATIONS LIST + PAGINATION ---------- */}
        <div className="flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our Offices <br />
            {/* <span className="bg-gradient-to-r from-[#01adff] to-[#1564e5] bg-clip-text text-transparent">
              Around the World
            </span> */}
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-md">
            We’re strategically located across the globe to provide localized expertise and fast project support wherever you are.
          </p>

          <div className="relative flex-1">
               {/* Pagination Controls */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md border ${
                  page === 0
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-100 border-gray-200"
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Prev
              </button>

              <p className="text-sm text-gray-500">
                {page + 1} / {totalPages}
              </p>

              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md border ${
                  page === totalPages - 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-100 border-gray-200"
                }`}
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {paginatedLocations.map((loc) => {
                  const isActive = selected?.id === loc.id;
                  return (
                    <Card
                      key={loc.id}
                      onClick={() => setSelected(loc)}
                      className={`cursor-pointer border transition-all duration-300 rounded-xl ${
                        isActive
                          ? "border-[#01adff] bg-[#01adff]/5 shadow-md"
                          : "border-gray-200 hover:border-[#01adff]/40 hover:bg-gray-50/80"
                      }`}
                    >
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {loc.name}
                          </h3>
                          {isActive && (
                            <span className="text-xs bg-[#01adff]/10 text-[#01adff] px-2 py-1 rounded-full">
                              Selected
                            </span>
                          )}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-[#01adff] mt-0.5" />
                            <p>{loc.address}</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Phone className="w-4 h-4 text-[#01adff] mt-0.5" />
                            <p>{loc.phone}</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Mail className="w-4 h-4 text-[#01adff] mt-0.5" />
                            <p>{loc.email}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </motion.div>
            </AnimatePresence>

         
          </div>
        </div>

        {/* ---------- RIGHT SIDE: INTERACTIVE MAP ---------- */}
        <div className="relative w-full md:mt-20 aspect-[1/1] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/images/worldmap.png"
              alt="World Map"
              className="w-full h-full object-contain opacity-60"
            />
          </div>

          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute"
                style={{
                  left: `${selected.mapX}%`,
                  top: `${selected.mapY}%`,
                }}
              >
                <motion.div
                  className="relative flex items-center justify-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#01adff] shadow-lg relative z-10" />
                    {/* <MapPin className="w-2 h-2 text-[#01adff]" /> */}
                  <div className="absolute w-12 h-12 rounded-full bg-[#01adff]/30 blur-md" />
                </motion.div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-sm text-gray-800 font-medium whitespace-nowrap">
                  {selected.name.replace("Mark Comprehensive ", "")}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
