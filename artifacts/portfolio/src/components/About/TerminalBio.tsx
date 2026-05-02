"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { about } from "../../data/about"

export function TerminalBio() {
  const [lines, setLines] = useState<string[]>(["$ whoami", ""])
  const [currentPara, setCurrentPara] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentPara >= about.bio.length) {
      setDone(true)
      return
    }
    const para = "> " + about.bio[currentPara]
    if (currentChar < para.length) {
      const t = setTimeout(() => {
        setLines(prev => {
          const next = [...prev]
          // The current typing line is the last element
          if (next.length <= 2 + currentPara) {
            next.push("")
          }
          next[2 + currentPara] = para.slice(0, currentChar + 1)
          return next
        })
        setCurrentChar(c => c + 1)
      }, 18)
      return () => clearTimeout(t)
    } else {
      // Paragraph done, pause then move to next
      const t = setTimeout(() => {
        setCurrentPara(p => p + 1)
        setCurrentChar(0)
      }, 400)
      return () => clearTimeout(t)
    }
  }, [currentPara, currentChar])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border border-[var(--px-border)]"
    >
      {/* Terminal title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[var(--px-border)]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 block" style={{ background: "#FF5F57" }} />
          <span className="w-2 h-2 block" style={{ background: "#FFBD2E" }} />
          <span className="w-2 h-2 block" style={{ background: "#28C840" }} />
        </div>
        <span className="font-mono text-[11px] text-[var(--px-muted)]">about.sh</span>
      </div>
      {/* Terminal body */}
      <div ref={containerRef} className="bg-[var(--px-surface)] p-5 font-mono text-[13px] min-h-[160px]">
        {lines.map((line, i) => (
          <div key={i} className={i === 0 ? "text-[var(--px-accent)]" : "text-[var(--px-text)] opacity-90"}>
            {line || <>&nbsp;</>}
          </div>
        ))}
        {done && (
          <span className="text-[var(--px-accent)] cursor-blink">_</span>
        )}
      </div>
    </motion.div>
  )
}
