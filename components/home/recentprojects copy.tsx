"use client";

import Image from "next/image";
import Image1 from "../../public/compressed-images/project-photos/PENSION FUND/IMG_5441.jpg";
import Image2 from "../../public/compressed-images/project-photos/ROTANA - 4 STAR HOTEL/IMG_5500.jpg";
import Image3 from "../../public/compressed-images/project-photos/DOWNE/IMG_3868.jpg";

type ProjectData = {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  name: string;
  region: string;
  type: string;
  city: string;
  year: string;
  status: string;
  area: string;
  description: string;
  system: string;
};

// Map images to projects manually
const projectImages = [Image1, Image2, Image3, Image2, Image3, Image1];

const projects: ProjectData[] = [
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: "pexel(1103970)",
    name: "Al Meera Hypermarket",
    region: "Oman",
    type: "Commercial",
    city: "Muscat",
    year: "2024",
    status: "Completed",
    area: "25,000 m²",
    description:
      "A modern hypermarket featuring a high-efficiency stick curtain wall system with shading fins and insulated roof glazing. Designed to maximize daylight and reduce energy consumption.",
    system: "Stick Curtain Wall with Shading Fins",
  },
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: "pexel(416430)",
    name: "Alila Hotel",
    region: "Oman",
    type: "Hospitality",
    city: "Jabal Akhdar",
    year: "2023",
    status: "Completed",
    area: "30,000 m²",
    description:
      "A mountain resort blending natural stone architecture with contemporary façade systems, emphasizing sustainability and harmony with the surrounding landscape.",
    system: "Stone Cladding with Integrated Aluminum",
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: "pexel(310452)",
    name: "Al Mouj Development",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2024",
    status: "In Progress",
    area: "50,000 m²",
    description:
      "A waterfront mixed-use development with contemporary glass façades and aluminum shading systems offering luxurious coastal living with marine-grade materials.",
    system: "Unitized Curtain Wall & Window Wall",
  },
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: "pexel(327482)",
    name: "Dhar Hassan Villa",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2022",
    status: "Completed",
    area: "1,200 m²",
    description:
      "A luxury private villa featuring floor-to-ceiling glazing and locally crafted stone façades, creating a seamless indoor-outdoor connection.",
    system: "Hybrid Curtain Wall & Stone Cladding",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: "pexel(325185)",
    name: "Downe Tower",
    region: "Oman",
    type: "Highrise",
    city: "Muscat",
    year: "2023",
    status: "In Progress",
    area: "40,000 m²",
    description:
      "A contemporary highrise with a sleek glass façade utilizing a unitized system for rapid installation and superior thermal performance.",
    system: "Unitized Curtain Wall System",
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: "pexel(358574)",
    name: "Ibrahim Elite",
    region: "Oman",
    type: "Residential",
    city: "Muscat",
    year: "2023",
    status: "Completed",
    area: "18,000 m²",
    description:
      "A premium apartment complex featuring an elegant façade with vertical aluminum fins and solar-control glazing for improved comfort and privacy.",
    system: "Window Wall with Vertical Fins",
  },
];

export default function RecentProjects() {
  return (
    <section className="py-24 container ">
   
        <div className="mx-auto pb-16 px-4 sm:px-6 lg:px-8 relative">
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
   

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="w-full h-72 relative transition-transform duration-500 group-hover:-translate-y-12">
              <Image
                src={projectImages[index % projectImages.length]}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Hidden Black Box */}
            <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0">
              <h3 className="text-lg font-semibold mb-1 text-[#9be7ff]">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <p className="text-xs text-gray-400 mb-2">
                {project.city} | {project.year} | {project.status}
              </p>
              <button className="flex items-center gap-2 text-sm font-medium tracking-wide">
                MORE <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
