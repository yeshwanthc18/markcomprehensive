import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "../../public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6470.jpg";
import Image2 from "../../public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6517.jpg";
import Image3 from "../../public/compressed-images/project-photos/DHAR HASSAN VILLA/IMG_6551.jpg";
import BlurText from "../animations/TextAnimation";
import ButtonPrimary, { ButtonSecondary } from "../layout/Button";

export default function WelcomeSection() {
  const [currentFace, setCurrentFace] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

const faces = [
  {
    image: Image1,
    alt: "Mark Comprehensive Building",
    content: (
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#01adff]/80 backdrop-blur-sm flex items-center justify-center rounded">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Our Building</h3>
            <p className="text-sm text-gray-300">Mark Comprehensive LLC</p>
          </div>
        </div>
        <p className="text-base text-gray-200">Sultanate of Oman</p>
      </div>
    ),
    overlay: "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
  },
  {
    image: Image2,
    alt: "ISO Certification",
    content: (
      <div className="absolute inset-0 flex items-center justify-center p-12 text-white z-10">
        <div className="text-center">
          <div className="w-40 h-40 mx-auto mb-8 bg-[#01adff]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Award className="w-20 h-20 text-white" />
          </div>
          <div className="text-6xl font-bold mb-4">ISO 9001</div>
          <div className="text-2xl font-semibold mb-4">Certified</div>
          <div className="w-24 h-1 bg-[#01adff] mx-auto mb-4"></div>
          <p className="text-lg">Quality Management System</p>
        </div>
      </div>
    ),
   overlay: "bg-gradient-to-br from-[#000000]/10 via-[#0000000]/10 to-[#1c345c]/70",
  },
  {
    image: Image3,
    alt: "14+ Years of Excellence",
    content: (
      <div className="absolute inset-0 flex items-center justify-center p-12 text-white z-10">
        <div className="text-center">
          <Calendar className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl" />
          <div className="text-8xl font-bold mb-4 drop-shadow-2xl">14+</div>
          <div className="text-3xl font-semibold mb-4 drop-shadow-lg">
            Years of Excellence
          </div>
          <div className="w-32 h-1 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl drop-shadow-lg">
            Serving the Middle East Since 2010
          </p>
        </div>
      </div>
    ),
    overlay: "bg-gradient-to-br from-[#01adff]/70 via-[#0192d4]/70 to-[#1c345c]/70",
  },
];


  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="container py-24 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-8">
              {/* <p className="text-[#01adff] font-light text-xl tracking-wider mb-2 uppercase">
                Beyond Façades. Beyond Borders.
              </p> */}
            </div>

            <BlurText
              text="Beyond Façades. Beyond Borders."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl mb-4  text-[#01adff]"
            />
              <div className="w-24 h-0.5 mb-8 bg-gradient-to-r from-[#01adff] to-transparent"></div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded in the Sultanate of Oman in 2010, Mark Comprehensive LLC
                has become a trusted leader in custom facade and architectural
                systems across the Middle East and beyond.
              </p>
              <p>
                Specializing in aluminum, glass, and decorative metal solutions,
                we serve the evolving needs of the region's fast-paced
                construction industry with innovative designs and superior
                craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-10">
              <div className="flex items-center rounded-sm gap-4 bg-[#01adff]/10 backdrop-blur-sm px-8 py-4 border border-[#01adff]/20 ">
                <Calendar className="w-6 h-6 text-[#01adff]" />
                <div>
                  <span className="font-bold text-white text-lg">
                    Since 2010
                  </span>
                  <p className="text-gray-400 text-sm">Years of Excellence</p>
                </div>
              </div>
              <div className="flex items-center rounded-sm gap-4 bg-[#01adff]/10 backdrop-blur-sm px-8 py-4 border border-[#01adff]/20 ">
                <Users className="w-6 h-6 text-[#01adff]" />
                <div>
                  <span className="font-bold text-white text-lg">100+</span>
                  <p className="text-gray-400 text-sm">Professionals</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <ButtonPrimary
            
                className=" rounded-sm transition-all duration-300 "
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonPrimary>
              <ButtonSecondary
          
              >
                <Phone className="mr-2 h-5 w-5" />
                Free Inspection
              </ButtonSecondary>
            </div>
          </div>

          {/* Right Content - Smooth Crossfade Gallery */}
          <div className="relative animate-fade-in">
            <div className="relative w-full h-[600px]  overflow-hidden rounded-sm shadow-2xl ring-1 ring-[#01adff]/20">
              {faces.map((face, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: currentFace === index ? 1 : 0,
                    zIndex: currentFace === index ? 10 : 1,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={face.image}
                      alt={face.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      quality={95}
                    />
                    <div className={`absolute inset-0 ${face.overlay}`}></div>
                    {face.content}
                  </div>
                </div>
              ))}

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {faces.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFace(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentFace === index
                        ? "w-8 h-2 bg-[#01adff]"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.8s ease-out;
        }
      `}</style>
    </section>
  );
}
