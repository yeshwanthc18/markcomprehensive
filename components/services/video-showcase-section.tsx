"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "@/components/SmartImage";
import { useState } from "react";
import Image1 from "../../public/compressed-images/image.jpg";
import Image2 from "../../public/compressed-images/image2.jpg";
import Image3 from "../../public/compressed-images/image3.jpg";
import Image4 from "../../public/compressed-images/image4.jpg";

export function VideoShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    {
      title: "Glazing System Installation",
      thumbnail: Image1,
      duration: "3:45",
    },
    {
      title: "Smart Access Demo",
      thumbnail: Image2,
      duration: "2:30",
    },
    {
      title: "Fire Rating Test",
      thumbnail: Image3,
      duration: "4:15",
    },
    {
      title: "Ventilation System",
      thumbnail: Image4,
      duration: "3:20",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            See Our <span className="text-[#01adff]">Solutions</span> in Action
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-3xl mx-auto">
            Watch our technical demonstrations and discover how our facade
            systems deliver exceptional performance and aesthetic appeal.
          </p>
        </div>

        {/* Main Video */}
        <div className="relative aspect-video  overflow-hidden shadow-2xl mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Button
              size="lg"
              className=" w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
            >
              <Play className="h-10 w-10 text-white ml-1" />
            </Button>
          </div>
          <Image
            src={Image2}
            alt="Facade Installation Process"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <h3 className="text-2xl font-bold text-white mb-2">
              Complete Installation Process
            </h3>
            <p className="text-blue-200">
              Watch our expert team install a complete facade system
            </p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative aspect-video  overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedVideo(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12  bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-6 w-6 text-white ml-0.5" />
                </div>
              </div>
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <p className="text-white text-sm font-semibold mb-1 line-clamp-2">
                  {video.title}
                </p>
                <p className="text-blue-200 text-xs">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
