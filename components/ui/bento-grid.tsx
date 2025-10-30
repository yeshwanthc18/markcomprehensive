"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "../layout/Button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[25rem] p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  client,
  architect,
  region,
  city,
  area,
  id,
  year,
  status,
  challenges,
}: {
  className?: string;
  title?: string;
  description?: string;
  icon?: string;
  client?: string;
  architect?: string;
  region?: string;
  city?: string;
  area?: string;
  id?: any;
  year?: number;
  status?: string;
  challenges?: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative overflow-hiddenshadow-lg border border-neutral-800 bg-neutral-950 group cursor-pointer transition-all duration-500",
        className
      )}
    >
      {/* 🔹 Background Image */}
      <Image
        src={icon || "/placeholder.jpg"}
        alt={title || "Project Image"}
        fill
        className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700"
      />

      {/* 🔹 Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/30" />

      {/* 🔹 Floating Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 transition-all duration-500 group-hover:translate-y-[-8px]">
        {/* Header Info */}
        <div className="flex justify-between items-center mb-3">
          <div className="text-xs uppercase tracking-wide text-neutral-300">
            {region} • {year}
          </div>
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full border backdrop-blur-sm",
              status === "Completed"
                ? "text-green-300 border-green-400/40 bg-green-900/20"
                : "text-yellow-300 border-yellow-400/40 bg-yellow-900/20"
            )}
          >
            {status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 leading-tight group-hover:text-[#00bfff] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-300 mb-4 line-clamp-2">
          {description?.slice(0, 120)}...
        </p>

        {/* Metadata */}
        <div className="space-y-1 text-xs text-neutral-400">
          {client && <p>👤 Client: {client}</p>}
          {architect && <p>🏛️ Architect: {architect}</p>}
          {city && <p>📍 {city}, {region}</p>}
          {area && <p>📐 Area: {area}</p>}
          {challenges && <p>⚙️ {challenges}</p>}
        </div>

        {/* Button */}
        <div className="mt-5">
          <ButtonPrimary
            onClick={handleClick}
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm px-4 py-2 transition-all duration-300"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </ButtonPrimary>
        </div>
      </div>

      {/* 🔹 Subtle glow border on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#00bfff]/40 transition-all duration-700 rounded-2xl pointer-events-none"></div>
    </motion.div>
  );
};
