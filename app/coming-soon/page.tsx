"use client";

import { useEffect, useState } from "react";
import bgImage from "../../public/compressed-images/about-banner.jpg";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function ComingSoon() {
  // Launch date = 98 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 98);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white bg-[#001952]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center px-6">
        {/* Heading */}
        <p className="text-sm font-semibold text-[#01adff] tracking-widest mb-2 animate-pulse">
          NEW EXPERIENCE
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          COMING SOON
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Soon we will live an unforgettable experience together with our new
          website. We will bring tools to improve our communication and the
          products that improve the lives of our customers.
        </p>

        {/* Countdown */}
        <div className="flex justify-center space-x-6 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="group">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-[#01adff] text-3xl font-bold text-[#01adff] shadow-xl group-hover:scale-110 transition-transform duration-300">
                {value}
              </div>
              <p className="uppercase text-sm mt-3 tracking-wider text-gray-300 group-hover:text-[#01adff] transition-colors duration-300">
                {unit}
              </p>
            </div>
          ))}
        </div>

        {/* Footer / message */}
        <p className="text-sm text-gray-400 mt-10">
          We’re getting ready to launch in style 🚀
        </p>
      </div>
    </div>
  );
}

