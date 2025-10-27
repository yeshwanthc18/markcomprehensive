"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface QuickEstimateContextType {
  isOpen: boolean
  openPopup: () => void
  closePopup: () => void
}

const QuickEstimateContext = createContext<QuickEstimateContextType | undefined>(undefined)

export function QuickEstimateProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false)

  return (
    <QuickEstimateContext.Provider value={{ isOpen, openPopup, closePopup }}>{children}</QuickEstimateContext.Provider>
  )
}

export function useQuickEstimate() {
  const context = useContext(QuickEstimateContext)
  if (context === undefined) {
    throw new Error("useQuickEstimate must be used within a QuickEstimateProvider")
  }
  return context
}
