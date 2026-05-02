import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { blogPosts, BlogPost, BlogStatus } from "@/data/blog"
import { BlogCard } from "./BlogCard"
import { BlogExpanded } from "./BlogExpanded"
import { EmptyState } from "./EmptyState"

type StatusFilter = "all" | BlogStatus
type CategoryFilter = "all" | BlogPost["category"]

interface Props {
  statusFilter: StatusFilter
  categoryFilter: CategoryFilter
  tagFilter: string | null
  onResetFilters: () => void
}

export function BlogGrid({ statusFilter, categoryFilter, tagFilter, onResetFilters }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = blogPosts.filter(post => {
    const statusMatch = statusFilter === "all" || post.status === statusFilter
    const catMatch = categoryFilter === "all" || post.category === categoryFilter
    const tagMatch = !tagFilter || post.tags.includes(tagFilter)
    return statusMatch && catMatch && tagMatch
  })

  function toggle(id: string) {
    setExpandedId(prev => prev === id ? null : id)
  }

  function navigateSeries(id: string) {
    setExpandedId(id)
  }

  if (filtered.length === 0) {
    return (
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3">
        <EmptyState onReset={onResetFilters} />
      </div>
    )
  }

  // Build rows: cards + expanded panel after the row containing the expanded card
  // Use a flat grid approach where expanded spans full width
  return (
    <div className="mt-6">
      <AnimatePresence mode="popLayout">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--px-border)]">
          {filtered.map((post, i) => (
            <div key={post.id} className="bg-[var(--px-bg)]">
              <BlogCard
                post={post}
                index={i}
                isExpanded={expandedId === post.id}
                onToggle={() => toggle(post.id)}
              />
            </div>
          ))}
        </div>
      </AnimatePresence>

      {/* Expanded panel — shown below grid when any post is open */}
      {expandedId && (() => {
        const expandedPost = filtered.find(p => p.id === expandedId)
        return expandedPost ? (
          <BlogExpanded
            post={expandedPost}
            isOpen={true}
            onClose={() => setExpandedId(null)}
            onNavigateSeries={navigateSeries}
          />
        ) : null
      })()}
    </div>
  )
}
