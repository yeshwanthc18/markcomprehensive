"use client"

import { useEffect, useState } from "react"

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint)

    checkMobile()

    const handleResize = () => checkMobile()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile ?? false
}
