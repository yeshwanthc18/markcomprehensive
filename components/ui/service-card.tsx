"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Play,
  ExternalLink,
} from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    features: string[];
    color: string;
    image: string;
    specs: Partial<Record<string, string>>;
    category?: string;
    link: string;
  };
  index: number;
  className?: string;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-xl overflow-hidden bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(1,173,255,0.2)] border border-white/30 transition-all duration-700"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover rounded-t-xl opacity-90"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Play Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        >
          <Button
            size="icon"
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 transition-all"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </Button>
        </motion.div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge
            className={cn(
              `${service.color} text-white font-medium border-none shadow-md`
            )}
          >
            Featured
          </Badge>
          {service.category && (
            <Badge className="bg-white/90 text-black font-medium">
              {service.category}
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <CardHeader className="space-y-3 p-6 pb-3">
        <div className="flex justify-between items-start">
          <div
            className={`w-12 h-12 ${service.color} flex items-center justify-center rounded-lg bg-opacity-90 text-white shadow-inner`}
          >
            <service.icon className="h-6 w-6" />
          </div>

          <Link href={service.link}>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-[#01adff] hover:scale-110 transition-transform"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Link href={service.link}>
          <CardTitle className="text-2xl font-semibold tracking-tight text-gray-900 hover:text-[#01adff] transition-colors">
            {service.title}
          </CardTitle>
        </Link>

        <CardDescription className="text-gray-700 leading-relaxed text-base">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 pt-2 space-y-5 border-t border-white/20">
        {/* Features */}
        <div className="space-y-3">
          {service.features
            .slice(0, isExpanded ? service.features.length : 3)
            .map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#01adff] mt-1 flex-shrink-0" />
                <span className="text-gray-800 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}

          {service.features.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#01adff] text-sm font-medium hover:underline"
            >
              {isExpanded
                ? "Show Less"
                : `+${service.features.length - 3} More Features`}
            </button>
          )}
        </div>

        {/* CTA */}
        <Button
          onClick={() => router.push(service.link)}
          className="w-full bg-[#01adff] hover:bg-[#0189cc] text-white font-semibold py-5 rounded-md shadow-lg hover:shadow-[#01adff]/40 transition-all duration-500 flex items-center justify-center gap-2"
        >
          Explore Service
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            →
          </motion.span>
        </Button>
      </CardContent>

      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </motion.div>
  );
}
