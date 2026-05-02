import { motion } from "framer-motion"
import { BlogPost } from "@/data/blog"
import { CategoryBadge } from "./CategoryBadge"
import { SeriesBadge } from "./SeriesBadge"
import { StatusChip } from "./StatusChip"
import { ReadTimeChip } from "./ReadTimeChip"

interface Props {
  post: BlogPost
  index: number
  isExpanded: boolean
  onToggle: () => void
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 8 8" width="10" height="10" fill="currentColor"
      className="pixel-art flex-shrink-0" style={{ imageRendering: 'pixelated' }}
      animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
    >
      <rect x="1" y="2" width="1" height="1" /><rect x="2" y="3" width="1" height="1" />
      <rect x="3" y="4" width="2" height="1" /><rect x="5" y="3" width="1" height="1" />
      <rect x="6" y="2" width="1" height="1" />
    </motion.svg>
  )
}

export function BlogCard({ post, index, isExpanded, onToggle }: Props) {
  const isSoon = post.status === "coming-soon"
  const maxTagsVisible = 3
  const visibleTags = post.tags.slice(0, maxTagsVisible)
  const extraTags = post.tags.length - maxTagsVisible

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.22 }}
      style={{ opacity: isSoon ? 0.75 : 1 }}
    >
      <div
        className="flex flex-col gap-3 p-5 bg-[var(--px-surface)] cursor-pointer transition-all duration-150 min-h-[220px]"
        style={{
          border: `1px ${isSoon ? 'dashed' : 'solid'} var(--px-border)`,
        }}
        onClick={onToggle}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'translate(-3px, -3px)'
          el.style.boxShadow = '5px 5px 0px var(--px-accent)'
          el.style.borderColor = 'var(--px-accent)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = ''
          el.style.boxShadow = ''
          el.style.borderColor = 'var(--px-border)'
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <CategoryBadge category={post.category} />
            {post.series && <SeriesBadge series={post.series} />}
          </div>
          <StatusChip status={post.status} />
        </div>

        {/* Title block */}
        <div className="flex flex-col gap-1 mt-1">
          <h3 className="font-mono text-[15px] font-bold text-[var(--px-text)] leading-snug line-clamp-2">{post.title}</h3>
          <p className="font-sans text-[12px] text-[var(--px-muted)] italic leading-snug line-clamp-1">{post.subtitle}</p>
        </div>

        {/* Preview */}
        <p className="font-sans text-[12px] text-[var(--px-muted)] line-clamp-3 leading-relaxed">{post.preview}</p>

        {/* Meta row */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <ReadTimeChip minutes={post.readTime.minutes} />
            <div className="w-[3px] h-[3px] bg-[var(--px-border)]" />
            <span className="font-mono text-[10px] text-[var(--px-muted)]">{post.publishedAt || "Unpublished"}</span>
          </div>
          <ChevronDown open={isExpanded} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {visibleTags.map(tag => (
            <span key={tag} className="font-mono text-[10px] px-1.5 py-0.5 border border-[var(--px-border)] text-[var(--px-muted)]">{tag}</span>
          ))}
          {extraTags > 0 && (
            <span className="font-mono text-[10px] text-[var(--px-muted)]">+{extraTags}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
