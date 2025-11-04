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
        "mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-6 auto-rows-[25rem]",
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
  title?: any;
  description?: string;
  icon?: any;
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

  const handleClick = () => router.push(`/projects/${id}`);

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "group relative overflow-hidden rounded-sm bg-black/80 cursor-pointer transition-all duration-700",
        "hover:shadow-[0_0_40px_-10px_rgba(0,191,255,0.3)]",
        className
      )}
    >
      {/* 🔹 Background Image */}
      <Image
        src={icon}
        alt={title}
        fill
        priority
        className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 ease-out rounded-sm"
      />

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/60 group-hover:via-black/20" />

      {/* 🔹 Floating Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white transition-all duration-700 group-hover:translate-y-[-8px]">
        {/* Header Info */}
        <div className="flex justify-between items-center mb-3 text-xs uppercase tracking-wider">
          <span className="text-white/70">{region} • {year}</span>
          <span
            className={cn(
              "text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-md transition-all duration-500",
              status === "Completed"
                ? "text-green-300 border-green-400/30 bg-green-900/10"
                : "text-yellow-300 border-yellow-400/30 bg-yellow-900/10"
            )}
          >
            {status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-2 leading-snug text-white group-hover:text-[#00bfff] transition-colors duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-5">
          {description?.slice(0, 120)}...
        </p>

        {/* Button */}
        <ButtonPrimary
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-5 py-2.5 rounded-sm backdrop-blur-lg transition-all duration-500 hover:translate-x-1"
        >
          View Project
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </ButtonPrimary>
      </div>

      {/* 🔹 Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#00bfff]/30 transition-all duration-700 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </motion.div>
  );
};
