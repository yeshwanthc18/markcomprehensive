"use client"

import type { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/project-data"

export interface ProjectCardProps extends Project {}

const ProjectCard: FC<ProjectCardProps> = ({ id, name, region, type, city, year, description, images }) => {
  const mainImage = images[0]

  return (
    <Link href={`/projects/${id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-200">
          {mainImage?.src ? (
            <Image
              src={mainImage.src || "/placeholder.svg"}
              alt={mainImage.alt || name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
              <span className="text-gray-600">No image</span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4">
          {/* Meta Info */}
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              {type}
            </span>
            <span className="text-sm font-medium text-gray-600">{year}</span>
          </div>

          {/* Title */}
          <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
            {name}
          </h3>

          {/* Location */}
          <p className="mb-3 text-sm text-gray-600">
            {city}, {region}
          </p>

          {/* Description */}
          <p className="line-clamp-2 text-sm text-gray-700">{description}</p>

          {/* View More Link */}
          <div className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-800">
            View Project
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
