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
        "mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 auto-rows-[26rem] relative",
        className
      )}
    >
      {/* 🔹 Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/5 via-transparent to-[#1564e5]/10 blur-3xl -z-10 rounded-3xl" />
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
      whileHover={{ scale: 1.02, rotateX: 1, rotateY: -1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-[#030712] cursor-pointer",
        "border border-white/10 shadow-[0_0_35px_rgba(1,173,255,0.08)]",
        "hover:shadow-[0_0_55px_rgba(1,173,255,0.25)] hover:border-[#00bfff]/30",
        "transition-all duration-700 backdrop-blur-md",
        className
      )}
    >
      {/* 🔹 Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={icon}
          alt={title}
          fill
          priority
          className="object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 rounded-xl"
        />
      </motion.div>

      {/* 🔹 Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/70 group-hover:via-black/40 transition-all duration-700" />

      {/* 🔹 Animated Light Sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      {/* 🔹 Floating Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white transition-all duration-700 group-hover:translate-y-[-10px]">
        {/* Header Info */}
        <div className="flex justify-between items-center mb-3 text-xs uppercase tracking-wider">
          <span className="text-white/70">
            {region} • {year}
          </span>
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
        <p className="text-sm text-white/80 leading-relaxed line-clamp-2 mb-6">
          {description?.slice(0, 120)}...
        </p>

        {/* Button */}
        <ButtonPrimary
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#00bfff]/20 text-white text-sm px-5 py-2.5 rounded-md backdrop-blur-md transition-all duration-500 hover:translate-x-1"
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

      {/* 🔹 Outer Glow Border Animation */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </motion.div>
  );
};
