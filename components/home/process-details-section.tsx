"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image1 from "../../public/images/triangle-facade-of-a-modern-building.jpg";
import Beams from "../animations/BackgroundBeams";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  step: string;
  title: string;
  description: string;
  duration: string;
  features: string[];
  gradient: string;
  accentColor: string;
};

const steps: Step[] = [
  {
    step: "01",
    title: "Consultation & Design",
    description:
      "Initial consultation, site assessment, and custom design development based on your requirements.",
    duration: "1-2 weeks",
    features: ["Site Analysis", "Custom Designs", "3D Visualization"],
    gradient: "from-[#1c345c] via-[#1c345c] to-[#1c345c]",
    accentColor: "#01adff",
  },
  {
    step: "02",
    title: "Engineering & Approval",
    description:
      "Detailed engineering calculations, structural analysis, and regulatory approval processes.",
    duration: "2-3 weeks",
    features: ["Structural Analysis", "Permit Processing", "Code Compliance"],
    gradient: "from-[#1c345c] via-[#1c345c] to-[#1c345c]",
    accentColor: "#00d4ff",
  },
  {
    step: "03",
    title: "Fabrication & Installation",
    description:
      "Precision fabrication in our facilities followed by professional on-site installation.",
    duration: "4-8 weeks",
    features: ["Quality Materials", "Expert Installation", "Safety Protocols"],
    gradient: "from-[#1c345c] via-[#1c345c] to-[#1c345c]",
    accentColor: "#00a8ff",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Comprehensive testing, final inspection, and project handover with warranty coverage.",
    duration: "1 week",
    features: ["Final Testing", "Documentation", "Warranty Support"],
    gradient: "from-[#1c345c] via-[#1c345c] to-[#1c345c]",
    accentColor: "#0090ff",
  },
];

export default function HomeHowWeWork() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);

  useGSAP(
    (context) => {
      const container = containerRef.current;
      const track = trackRef.current;
      const main = mainRef.current;

      if (!container || !track || !main) return;

      const cards = Array.from(
        track.querySelectorAll<HTMLDivElement>(".process-card")
      );
      const progressSteps = Array.from(
        main.querySelectorAll<HTMLDivElement>(".progress-step")
      );

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const containerWidth = container.clientWidth;
        const lastCard = cards[cards.length - 1];
        const lastCardWidth = lastCard?.offsetWidth || 0;
        return trackWidth - containerWidth + lastCardWidth;
      };

      const tween = gsap.to(track, {
        id: "horizontal-scroll",
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: 0.3,
            ease: "power1.inOut",
          },
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newActive = Math.round(progress * (cards.length - 1));

            if (newActive !== activeStepRef.current) {
              activeStepRef.current = newActive;
              setActiveStep(newActive);

              progressSteps.forEach((step, index) => {
                if (index <= newActive) {
                  step.classList.add("active");
                } else {
                  step.classList.remove("active");
                }
              });
            }
          },
        },
      });

      const containerAnim = tween as gsap.core.Animation;

      cards.forEach((card, index) => {
        const content = card.querySelector<HTMLDivElement>(".card-content");

        if (!content) return;

        gsap.from(content, {
          scale: 0.9,
          opacity: 0.5,
          y: 50,
          scrollTrigger: {
            trigger: card,
            ...(containerAnim ? { containerAnimation: containerAnim } : {}),
            start: "left center",
            end: "center center",
            scrub: 1,
          },
        });
      });

      return () => {
        tween?.scrollTrigger?.kill();
        tween?.kill();
      };
    },
    { scope: mainRef, dependencies: [] }
  );

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${Image1.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        >
      </div> */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div ref={mainRef} className="relative z-10">
        <div
          className="relative container overflow-hidden min-h-screen flex flex-col"
          ref={containerRef}
        >
          {/* Header Section */}
          <div className="text-center pt-16 pb-1 px-6 relative z-10">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white relative">
                How we <span className="text-[#01adff]">Work</span>
              </h2>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#01adff] to-transparent"></div>
              </div>
            </div>
            <p className="mt-6 text-base md:text-lg text-white max-w-2xl mx-auto">
              Our streamlined 4-step process ensures excellence at every stage
            </p>
          </div>

          {/* Scrolling Cards Section */}
          <div className="flex-1 flex items-center">
            <div
              ref={trackRef}
              className="cards-track flex will-change-transform"
              style={{
                gap: "2rem",
                paddingLeft: "max(2rem, calc((100vw - 800px) / 2))",
              }}
            >
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className="process-card flex-none flex items-center justify-center -mt-10"
                  style={{ width: "min(800px, 90vw)" }}
                >
                  <div className="card-content relative w-full">
                    {/* Main Card */}
                    <div className="relative  rounded-lg p-10 transition-all duration-500 ease-out overflow-hidden group border border-gray-200  backdrop-blur-sm shadow-lg hover:shadow-xl">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -left-4 z-20">
                        <div
                          className={`w-24 h-24  flex items-center justify-center transition-all duration-300`}
                        >
                          <span className="text-white font-bold text-2xl">
                            {step.step}
                          </span>
                        </div>
                      </div>

                      <div className="relative z-10 ml-8">
                        {/* Title Section */}
                        <div className="mb-4">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                            {step.title}
                          </h3>
                          <div className="w-16 h-0.5 bg-[#01adff]"></div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-white leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                          {step.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 group/feature"
                            >
                              <div className="w-6 h-6 rounded-lg bg-[#01adff]/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform flex-shrink-0">
                                <svg
                                  className="w-3.5 h-3.5 text-[#01adff]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-white font-medium text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Section */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-2.5 h-2.5 bg-[#01adff] rounded-full"></div>
                              <div className="absolute inset-0 w-2.5 h-2.5 bg-[#01adff] rounded-full animate-ping"></div>
                            </div>
                            <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                              <span className="text-gray-500 text-xs block">
                                Duration
                              </span>
                              <span className="text-[#1c345c] font-bold text-sm">
                                {step.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .progress-step.active {
          transform: scale(1.1);
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
