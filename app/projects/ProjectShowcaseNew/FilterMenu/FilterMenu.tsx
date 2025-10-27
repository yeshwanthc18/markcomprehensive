"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X } from "lucide-react"
import styles from "./FilterMenu.module.css"

export interface CardNavProps {
  className?: string
  direction?: "down" | "up"
  onRegionChange?: (region: string) => void
  onProjectTypeChange?: (projectType: string) => void
}

const ALL_REGIONS = ["All", "Oman", "India", "Iraq", "KSA", "UAE"]
const ALL_TYPES = [
  "All",
  "Highrise",
  "Commercial",
  "Residential",
  "Institutional",
  "Hospitality",
  "Education",
  "Corporate",
]

const FilterMenu: React.FC<CardNavProps> = ({
  className = "",
  direction = "down",
  onRegionChange,
  onProjectTypeChange,
}) => {
  const [activeFilter, setActiveFilter] = useState<"regions" | "projectType" | null>(null)
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [selectedProjectType, setSelectedProjectType] = useState("All")
  const [isExpanded, setIsExpanded] = useState(false)

  const openFilter = (filterType: "regions" | "projectType") => {
    if (activeFilter === filterType) {
      setIsExpanded(false)
      setTimeout(() => setActiveFilter(null), 300)
    } else {
      setActiveFilter(filterType)
      setIsExpanded(true)
    }
  }

  const closeMenu = () => {
    setIsExpanded(false)
    setTimeout(() => setActiveFilter(null), 300)
  }

  const getFilterContent = () => {
    if (activeFilter === "regions") {
      return (
        <motion.div
          key="regions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className={styles.filterContent}
        >
          <h3 className={styles.filterTitle}>Select Region</h3>
          <div className={styles.filterGrid}>
            {ALL_REGIONS.map((region) => (
              <button
                key={region}
                className={`${styles.filterButton} ${selectedRegion === region ? styles.activeButton : ""}`}
                onClick={() => {
                  setSelectedRegion(region)
                  onRegionChange?.(region)
                  closeMenu()
                }}
              >
                {region}
              </button>
            ))}
          </div>
        </motion.div>
      )
    }

    if (activeFilter === "projectType") {
      return (
        <motion.div
          key="projectType"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className={styles.filterContent}
        >
          <h3 className={styles.filterTitle}>Select Project Type</h3>
          <div className={styles.filterGrid}>
            {ALL_TYPES.map((type) => (
              <button
                key={type}
                className={`${styles.filterButton} ${selectedProjectType === type ? styles.activeButton : ""}`}
                onClick={() => {
                  setSelectedProjectType(type)
                  onProjectTypeChange?.(type)
                  closeMenu()
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>
      )
    }

    return null
  }

  const topOrBottomStyle = direction === "down" ? { bottom: "1rem", top: "auto" } : { top: "1rem", bottom: "auto" }

  return (
    <div className={`${styles.cardNavContainer} ${className}`} style={topOrBottomStyle}>
      <motion.nav
        initial={{ height: 60 }}
        animate={{ height: isExpanded ? "auto" : 60 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={styles.cardNav}
      >
        {/* Top bar */}
        <div className={styles.cardNavTop}>
          <div className={styles.filtersContainer}>
            <div
              className={`${styles.filterTrigger} ${
                activeFilter === "regions" && isExpanded ? styles.activeTrigger : ""
              }`}
              onClick={() => openFilter("regions")}
            >
              <span className={styles.filterLabel}>
                Regions: <span>{selectedRegion}</span>
              </span>
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${activeFilter === "regions" && isExpanded ? styles.chevronActive : ""}`}
              />
            </div>

            <p className={styles.divider}>|</p>

            <div
              className={`${styles.filterTrigger} ${
                activeFilter === "projectType" && isExpanded ? styles.activeTrigger : ""
              }`}
              onClick={() => openFilter("projectType")}
            >
              <span className={styles.filterLabel}>
                Project Type: <span>{selectedProjectType}</span>
              </span>
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${
                  activeFilter === "projectType" && isExpanded ? styles.chevronActive : ""
                }`}
              />
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.button
                key="closeButton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMenu}
                className={styles.closeButton}
                aria-label="Close menu"
              >
                <X size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          {isExpanded && activeFilter && (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: direction === "down" ? 15 : -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === "down" ? -15 : 15 }}
              transition={{ duration: 0.3 }}
              className={styles.cardNavContent}
            >
              {getFilterContent()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default FilterMenu
