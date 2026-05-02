import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { PixelDivider } from "@/components/pixels/PixelDivider"
import { BlogPost, BlogStatus } from "@/data/blog"
import { BlogStats } from "./BlogStats"
import { BlogFilter } from "./BlogFilter"
import { BlogGrid } from "./BlogGrid"
import { TagCloud } from "./TagCloud"

type StatusFilter = "all" | BlogStatus
type CategoryFilter = "all" | BlogPost["category"]

const PencilIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="11" y="1" width="4" height="4" />
    <rect x="9" y="3" width="2" height="2" />
    <rect x="7" y="5" width="2" height="2" />
    <rect x="5" y="7" width="2" height="2" />
    <rect x="3" y="9" width="2" height="2" />
    <rect x="1" y="11" width="2" height="4" />
    <rect x="3" y="13" width="2" height="2" />
  </svg>
)

export function Blog() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all")
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all")
  const [tagFilter, setTagFilter] = useState<string | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // BlogGrid handles its own ESC via state
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  function resetFilters() {
    setStatusFilter("all")
    setCategoryFilter("all")
    setTagFilter(null)
  }

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="Blog" icon={<PencilIcon />} />
      <p className="font-sans text-[12px] text-[var(--px-muted)] italic -mt-3 mb-0">// writing about what I build and debug</p>
      <PixelDivider />

      <BlogStats />
      <BlogFilter
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        onStatusChange={setStatusFilter}
        onCategoryChange={setCategoryFilter}
      />
      <BlogGrid
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        tagFilter={tagFilter}
        onResetFilters={resetFilters}
      />
      <TagCloud activeTag={tagFilter} onTagClick={setTagFilter} />
    </motion.section>
  )
}
