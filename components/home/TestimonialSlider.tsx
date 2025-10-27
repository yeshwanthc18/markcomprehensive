import React from "react";
import CardSwap, { Card } from "../animations/CardSwap";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  project: string;
  image: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Denis Slavska",
    position: "CTO, Alitic",
    company: "Alitic",
    content: "They tailor their solutions to our specific needs and goals.",
    project: "Custom ERP Rollout",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  },
  {
    id: 2,
    name: "Jahan Melad",
    position: "Project Manager, Buildwave",
    company: "Buildwave",
    content:
      "They organized their work and internal management was outstanding.",
    project: "Financial District Facade",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  },
  {
    id: 3,
    name: "Jim Halpert",
    position: "Lead Engineering, InHive Space",
    company: "InHive",
    content: "Working with them was a great experience.",
    project: "InHive HQ",
    image:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  },
];

const TestimonialSlider = () => {
  return (
    <div style={{ height: "800px", position: "relative" }}>
      <CardSwap
        cardDistance={40}
        verticalDistance={50}
        delay={3000}
        pauseOnHover={true}
      >
        {DEFAULT_TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.id}>
            <div className="p-8 text-center text-white flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[#01adff]/40 shadow-md"
              />
              <p className="text-lg italic text-gray-300 max-w-md mb-6">
                “{testimonial.content}”
              </p>
              <h3 className="text-xl font-semibold text-white mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {testimonial.position}
              </p>
              <p className="text-[#01adff] text-sm font-medium mb-2">
                {testimonial.project}
              </p>
              <span className="text-gray-500 text-xs">
                {testimonial.company}
              </span>
            </div>
          </Card>
        ))}
      </CardSwap>
    </div>
  );
};

export default TestimonialSlider;
