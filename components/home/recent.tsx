import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { PROJECTS } from "@/lib/project-data";



export function RecentProjectsOne() {
  const project = PROJECTS;


  return (
    <section className="py-24">
      <div className="container pb-8 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Recent <span className="text-[#01adff]">Projects</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-black max-w-2xl mx-auto">
            Our Recent Projects
          </p>
        </div>
      </div>
      <BentoGrid className="container mx-auto">
        {project.slice(0, 5).map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.name}
            description={item.description}
            icon={item.images[0]?.src}
            client={item.client}
            architect={item.architect}
            region={item.region}
            id={item.id}
            city={item.city}
            area={item.area}
            year={item.year}
            status={item.status}
            // challenges={item.challenges}
            className={i === 3 || i === 6 ? "lg:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
