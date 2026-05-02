import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { blogPosts } from "@/data/blog"

interface Props {
  activeTag: string | null
  onTagClick: (tag: string | null) => void
}

export function TagCloud({ activeTag, onTagClick }: Props) {
  const [open, setOpen] = useState(false)

  const tagFreq = useMemo(() => {
    const freq: Record<string, number> = {}
    blogPosts.forEach(p => p.tags.forEach(t => { freq[t] = (freq[t] ?? 0) + 1 }))
    return Object.entries(freq).sort((a, b) => b[1] - a[1])
  }, [])

  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--px-accent)] hover:opacity-70 transition-opacity"
        >
          <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }} className="inline-block">▶</motion.span>
          // browse by tag
        </button>
        {activeTag && (
          <button
            onClick={() => onTagClick(null)}
            className="font-mono text-[10px] text-[var(--px-muted)] hover:text-[var(--px-accent)] transition-colors"
          >
            // clear tag filter
          </button>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 mt-4">
              {tagFreq.map(([tag, count]) => (
                <button
                  key={tag}
                  onClick={() => onTagClick(activeTag === tag ? null : tag)}
                  className="font-mono px-2.5 py-1 border transition-all duration-[120ms]"
                  style={{
                    fontSize: count >= 3 ? 12 : 11,
                    borderColor: activeTag === tag ? 'var(--px-accent)' : count >= 3 ? 'var(--px-accent)' : count >= 2 ? 'color-mix(in srgb, var(--px-accent) 60%, transparent)' : 'var(--px-border)',
                    background: activeTag === tag ? 'var(--px-accent)' : 'transparent',
                    color: activeTag === tag ? '#0D0D10' : 'var(--px-text)',
                  }}
                >
                  {tag} <span style={{ color: activeTag === tag ? '#0D0D10' : 'var(--px-muted)' }}>({count})</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
