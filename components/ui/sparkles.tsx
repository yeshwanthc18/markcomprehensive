"use client"
import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SparklesCoreProps {
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  className,
  particleColor = "#FFFFFF",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      fadeDirection: number
    }> = []

    // Create particles based on density
    const numParticles = Math.floor(particleDensity / 100)
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() * canvas.width) / window.devicePixelRatio,
        y: (Math.random() * canvas.height) / window.devicePixelRatio,
        size: minSize + Math.random() * (maxSize - minSize),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Update opacity for twinkling effect
        particle.opacity += particle.fadeDirection * 0.01
        if (particle.opacity <= 0.1 || particle.opacity >= 0.9) {
          particle.fadeDirection *= -1
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / window.devicePixelRatio
        if (particle.x > canvas.width / window.devicePixelRatio) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height / window.devicePixelRatio
        if (particle.y > canvas.height / window.devicePixelRatio) particle.y = 0

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [minSize, maxSize, particleDensity, particleColor])

  return <canvas ref={canvasRef} className={cn("absolute inset-0", className)} style={{ background }} />
}
