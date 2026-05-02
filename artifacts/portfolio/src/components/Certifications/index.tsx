import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { PixelDivider } from "@/components/pixels/PixelDivider"
import { Certification } from "@/data/certifications"
import { CertStats } from "./CertStats"
import { CertFilter } from "./CertFilter"
import { CertGrid } from "./CertGrid"

type StatusFilter = "all" | Certification["status"]
type CategoryFilter = "all" | Certification["category"]

const SealIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="5" y="1" width="6" height="2" />
    <rect x="3" y="3" width="2" height="2" /><rect x="11" y="3" width="2" height="2" />
    <rect x="1" y="5" width="2" height="6" /><rect x="13" y="5" width="2" height="6" />
    <rect x="3" y="11" width="2" height="2" /><rect x="11" y="11" width="2" height="2" />
    <rect x="5" y="13" width="6" height="2" />
    <rect x="6" y="5" width="4" height="6" />
  </svg>
)

export function Certifications() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all")

  // Close expanded card on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Signal to grid to close — handled by CertGrid's own state
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  function resetFilters() {
    setStatusFilter("all")
    setCategoryFilter("all")
  }

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="Certifications" icon={<SealIcon />} />
      <PixelDivider />

      <CertStats />
      <CertFilter
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        onStatusChange={setStatusFilter}
        onCategoryChange={setCategoryFilter}
      />
      <CertGrid
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        onResetFilters={resetFilters}
      />
    </motion.section>
  )
}
