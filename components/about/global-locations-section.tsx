"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollTriggerComponent from "@/components/animations/scroll-trigger";
import { useLocationContext } from "@/components/providers/location-provider";
import { getAllLocations } from "@/lib/geoplugin";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const palette = {
  primary: "#01adff",
  primaryDeep: "#1c345c",
  secondary: "#001952",
};

export default function GlobalLocationsSection() {
  const { locationData, locationError } = useLocationContext();
  const allLocations = getAllLocations();

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollTriggerComponent animation="fadeInUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              <span className="text-[#01adff]">Global</span> Presence
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto">
              Six strategic locations worldwide, each bringing local expertise
              and global standards.
            </p>
          </div>
        </ScrollTriggerComponent>

        <ScrollTriggerComponent animation="scaleIn" stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allLocations.map((location) => {
              const isUserRegion =
                locationData && location.id === locationData.id;
              return (
                <Card
                  key={location.id}
                  className="transition-all duration-300 hover:shadow-xl border border-black/10"
                  style={{
                    boxShadow: isUserRegion
                      ? "0 12px 28px rgba(0,0,0,0.08)"
                      : undefined,
                    backgroundColor: "white",
                   
                    outline: isUserRegion
                      ? `2px solid ${palette.primary}`
                      : undefined,
                  }}
                >
                  <CardHeader>
                    <CardTitle
                      className="text-lg flex items-center justify-between"
                      style={{ color: palette.secondary }}
                    >
                      <span>{location.name}</span>
                      {isUserRegion && (
                        <Badge
                          className="text-white"
                          style={{ backgroundColor: palette.primary }}
                        >
                          {locationError ? "Default" : "Your Region"}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-black/40 mt-0.5 flex-shrink-0" />
                        <p className="text-black/70">{location.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-black/40 flex-shrink-0" />
                        <p className="text-black/70">{location.phone}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-black/40 flex-shrink-0" />
                        <p className="text-black/70">{location.email}</p>
                      </div>

                      <div className="pt-3 border-t border-black/10">
                        <p className="text-xs text-black/60 mb-2">
                          Top Specialties:
                        </p>
                        <div className="space-y-1">
                          {location.specialties
                            .slice(0, 2)
                            .map((specialty, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle
                                  className="w-3 h-3 flex-shrink-0"
                                  style={{ color: palette.primary }}
                                />
                                <span className="text-xs text-black/70">
                                  {specialty}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollTriggerComponent>
      </div>
    </section>
  );
}
