import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image1 from "../../public/compressed-images/project-photos/PENSION FUND/IMG_5441.jpg";
import Image2 from "../../public/compressed-images/project-photos/ROTANA - 4 STAR HOTEL/IMG_5500.jpg";
import Image3 from "../../public/compressed-images/project-photos/DOWNE/IMG_3868.jpg";
import Image from "next/image";

export function TimelineProjects() {
  const data = [
    {
      title: "Oman",
      content: (
        <div>
          <p className="text-black text-xl leading-relaxed mb-6">
            State-of-the-art curtain wall system with integrated smart glass
            technology for this 80-story residential tower.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[Image1, Image2, Image3, Image2].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              >
                <Image
                  src={img}
                  alt={`project-${index}`}
                  width={500}
                  height={500}
                  className="h-20 w-full md:h-44 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay text on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm md:text-base font-medium text-center px-4">
                    Project Details or Description
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Dubai",
      content: (
        <div>
          <p className="mb-8 text-xl font-normal text-black md:text-xl dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>

           <div className="grid grid-cols-2 gap-4">
            {[Image3, Image1, Image3, Image2].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              >
                <Image
                  src={img}
                  alt={`project-${index}`}
                  width={500}
                  height={500}
                  className="h-20 w-full md:h-44 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay text on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm md:text-base font-medium text-center px-4">
                    Project Details or Description
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Iraq",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-xl dark:text-neutral-200">
            Advanced structural glazing with automated skylight systems for this
            cutting-edge technology center.
          </p>
           <div className="grid grid-cols-2 gap-4">
            {[Image3, Image1, Image3, Image2].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              >
                <Image
                  src={img}
                  alt={`project-${index}`}
                  width={500}
                  height={500}
                  className="h-20 w-full md:h-44 lg:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay text on hover */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-sm md:text-base font-medium text-center px-4">
                    Project Details or Description
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
