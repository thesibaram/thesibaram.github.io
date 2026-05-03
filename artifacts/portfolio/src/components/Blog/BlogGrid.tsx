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

const INITIAL_SHOW = 3;

export function BlogGrid({ statusFilter, categoryFilter, tagFilter, onResetFilters }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showMore, setShowMore] = useState(false)

  const filtered = blogPosts.filter(post => {
    const statusMatch = statusFilter === "all" || post.status === statusFilter
    const catMatch = categoryFilter === "all" || post.category === categoryFilter
    const tagMatch = !tagFilter || post.tags.includes(tagFilter)
    return statusMatch && catMatch && tagMatch
  })

  const displayed = showMore ? filtered : filtered.slice(0, INITIAL_SHOW)

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
          {displayed.map((post, i) => (
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
        const expandedPost = displayed.find(p => p.id === expandedId)
        return expandedPost ? (
          <BlogExpanded
            post={expandedPost}
            isOpen={true}
            onClose={() => setExpandedId(null)}
            onNavigateSeries={navigateSeries}
          />
        ) : null
      })()}

      {/* View More / Show Less */}
      {filtered.length > INITIAL_SHOW && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => { setShowMore(v => !v); setExpandedId(null); }}
            className="font-mono text-[11px] uppercase tracking-widest px-6 py-2.5 border border-[var(--px-border)] text-[var(--px-muted)] transition-all duration-150"
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--px-accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--px-accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--px-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--px-muted)";
            }}
          >
            {showMore ? "[ Show Less ↑ ]" : `[ View More Posts (${filtered.length - INITIAL_SHOW}) → ]`}
          </button>
        </div>
      )}
    </div>
  )
}
