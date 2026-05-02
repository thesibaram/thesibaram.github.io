import { useEffect, useRef, useState } from "react"
import { blogPosts } from "@/data/blog"

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setVal(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return val
}

export function BlogStats() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const total     = blogPosts.length
  const published = blogPosts.filter(p => p.status === "published").length
  const drafts    = blogPosts.filter(p => p.status === "draft").length
  const topics    = new Set(blogPosts.flatMap(p => p.tags)).size

  const v1 = useCountUp(total,     1000, triggered)
  const v2 = useCountUp(published, 1000, triggered)
  const v3 = useCountUp(drafts,    1000, triggered)
  const v4 = useCountUp(topics,    1000, triggered)

  const stats = [
    { value: v1, label: "Posts"   },
    { value: v2, label: "Live"    },
    { value: v3, label: "Writing" },
    { value: v4, label: "Topics"  },
  ]

  return (
    <div ref={ref} className="flex mt-8 border border-[var(--px-border)] divide-x divide-[var(--px-border)]">
      {stats.map(s => (
        <div key={s.label} className="flex-1 flex flex-col items-center py-4 gap-1">
          <span className="font-mono text-[22px] font-bold text-[var(--px-accent)]">{s.value}</span>
          <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
