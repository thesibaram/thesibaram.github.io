import { motion, AnimatePresence } from "framer-motion"
import { BlogPost, blogPosts } from "@/data/blog"
import { SeriesBadge } from "./SeriesBadge"
import { ReadTimeChip } from "./ReadTimeChip"
import { MarkdownRenderer } from "./MarkdownRenderer"
import { PixelChip } from "@/components/ui/PixelChip"

interface Props {
  post: BlogPost
  isOpen: boolean
  onClose: () => void
  onNavigateSeries?: (id: string) => void
}

function PixelAvatar() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="5" y="2" width="6" height="6" />
      <rect x="3" y="8" width="10" height="6" />
      <rect x="4" y="2" width="1" height="1" /><rect x="11" y="2" width="1" height="1" />
      <rect x="6" y="6" width="1" height="1" fill="var(--px-bg)" />
      <rect x="9" y="6" width="1" height="1" fill="var(--px-bg)" />
    </svg>
  )
}

export function BlogExpanded({ post, isOpen, onClose, onNavigateSeries }: Props) {
  const seriesPosts = post.series
    ? blogPosts.filter(p => p.series?.name === post.series?.name).sort((a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0))
    : []
  const seriesIndex = seriesPosts.findIndex(p => p.id === post.id)
  const prevPart = seriesIndex > 0 ? seriesPosts[seriesIndex - 1] : null
  const nextPart = seriesIndex < seriesPosts.length - 1 ? seriesPosts[seriesIndex + 1] : null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden col-span-full"
        >
          <div
            className="bg-[var(--px-bg)] px-6 md:px-8 py-6 md:py-7"
            style={{ borderTop: '2px solid var(--px-accent)' }}
          >
            {/* Header */}
            <div className="flex flex-col gap-3 mb-6 pb-5 border-b border-dashed border-[var(--px-border)]">
              <h2 className="font-mono text-[20px] font-bold text-[var(--px-text)] leading-snug">{post.title}</h2>
              <p className="font-sans text-[14px] text-[var(--px-muted)] italic">{post.subtitle}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-[var(--px-muted)]">
                <div className="flex items-center gap-1.5">
                  <PixelAvatar />
                  <span className="font-mono text-[11px] text-[var(--px-text)]">Sibaram Behera</span>
                </div>
                <span className="font-mono text-[10px]">·</span>
                <span className="font-mono text-[10px]">{post.publishedAt || "Unpublished"}</span>
                <span className="font-mono text-[10px]">·</span>
                <ReadTimeChip minutes={post.readTime.minutes} />
              </div>

              {/* All tags */}
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => <PixelChip key={tag}>{tag}</PixelChip>)}
              </div>

              {/* Series info */}
              {post.series && (
                <div className="flex flex-col gap-2">
                  <SeriesBadge series={post.series} expanded />
                  {/* Series part nav */}
                  {seriesPosts.length > 1 && (
                    <div className="flex items-center gap-2">
                      {seriesPosts.map(sp => (
                        <button
                          key={sp.id}
                          onClick={() => sp.id !== post.id && sp.status !== "coming-soon" && onNavigateSeries?.(sp.id)}
                          disabled={sp.id === post.id || sp.status === "coming-soon"}
                          className="w-7 h-7 font-mono text-[11px] border transition-all duration-100"
                          style={{
                            background: sp.id === post.id ? 'var(--px-accent)' : 'var(--px-surface)',
                            color: sp.id === post.id ? '#0D0D10' : sp.status === "coming-soon" ? 'var(--px-muted)' : 'var(--px-text)',
                            borderColor: sp.id === post.id ? 'var(--px-accent)' : sp.status === "coming-soon" ? 'var(--px-border)' : 'var(--px-border)',
                            borderStyle: sp.status === "coming-soon" ? 'dashed' : 'solid',
                            cursor: sp.id === post.id || sp.status === "coming-soon" ? 'default' : 'pointer'
                          }}
                        >
                          {sp.series?.part}
                        </button>
                      ))}
                      <div className="flex gap-2 ml-2">
                        {prevPart && (
                          <button
                            onClick={() => onNavigateSeries?.(prevPart.id)}
                            className="font-mono text-[11px] px-2 py-1 border border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)] transition-colors"
                          >
                            ← Pt.{prevPart.series?.part}
                          </button>
                        )}
                        {nextPart && (
                          <button
                            onClick={() => onNavigateSeries?.(nextPart.id)}
                            className="font-mono text-[11px] px-2 py-1 border border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)] transition-colors"
                          >
                            Pt.{nextPart.series?.part} →
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <MarkdownRenderer post={post} />

            {/* Footer */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-dashed border-[var(--px-border)]">
              <button
                onClick={onClose}
                className="flex items-center gap-2 font-mono text-[12px] text-[var(--px-muted)] hover:text-[var(--px-text)] transition-colors"
              >
                ← Back
              </button>
              {post.status === "published" && (
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[var(--px-muted)]">SHARE:</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="font-mono text-[10px] px-2 py-1 border border-[var(--px-border)] text-[var(--px-muted)] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)] transition-colors"
                  >
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
