import { motion } from "framer-motion"
import { SectionHeader } from "../ui/SectionHeader"
import { PixelDivider } from "../pixels/PixelDivider"
import { AboutImage } from "./AboutImage"
import { about } from "../../data/about"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
})

const PersonIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="5" y="2" width="6" height="6" />
    <rect x="3" y="9" width="10" height="7" />
  </svg>
)

const STAT_ICONS: Record<string, string> = {
  LOCATION:   "◎",
  BRANCH:     "⌘",
  FOCUS:      "◈",
  STATUS:     "●",
  GRADUATION: "◷",
  "SIH 2024": "⬡",
  PROJECTS:   "▦",
  GPU:        "▣",
}

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="max-w-[1360px] mx-auto px-4 md:px-6 py-16 md:py-24 w-full"
    >
      <SectionHeader title="About" icon={<PersonIcon />} />
      <PixelDivider />

      <div className="mt-10 md:mt-14 grid lg:grid-cols-[300px_1fr] gap-12 xl:gap-20 items-start">

        {/* ── LEFT: Photo + availability + fun facts ── */}
        <motion.div {...fadeUp(0.05)} className="flex flex-col items-center lg:items-start gap-6">

          {/* Photo + availability badge */}
          <div className="w-full flex flex-col items-center lg:items-start">
            <AboutImage />

            {/* Availability strip directly below photo */}
            <div
              className="flex items-center gap-2.5 px-4 py-2.5 border border-t-0 border-[var(--px-border)] bg-[var(--px-surface)]"
              style={{ width: "min(280px, calc(100vw - 32px))" }}
            >
              <span className="w-2 h-2 flex-shrink-0 bg-green-400 animate-pulse" />
              <span className="font-mono text-[11px] text-[var(--px-accent)] uppercase tracking-wider truncate">
                {about.status}
              </span>
            </div>
          </div>

          {/* Fun fact chips */}
          <div className="w-full">
            <p className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-[0.18em] mb-3">
              // fun.facts
            </p>
            <div className="flex flex-wrap gap-2">
              {about.funFacts.map((fact, i) => (
                <motion.span
                  key={fact}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.3 }}
                  className="font-mono text-[11px] px-3 py-1.5 border border-[var(--px-border)] text-[var(--px-muted)] bg-[var(--px-surface)]"
                >
                  ★ {fact}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Identity + bio + stats ── */}
        <div className="flex flex-col gap-8 min-w-0">

          {/* Identity header */}
          <motion.div {...fadeUp(0.12)} className="pb-6 border-b border-[var(--px-border)]">
            <span className="font-mono text-[11px] text-[var(--px-accent)] uppercase tracking-[0.2em] block mb-3">
              // about.me
            </span>
            <h2
              className="font-mono font-black text-[var(--px-text)] leading-none tracking-tight"
              style={{ fontSize: "clamp(22px, 3.5vw, 38px)" }}
            >
              {about.name}
            </h2>
            <p className="font-mono text-[13px] text-[var(--px-accent)] mt-2 tracking-wide uppercase">
              {about.role}
            </p>
            <p className="font-sans text-[14px] text-[var(--px-muted)] mt-1 leading-snug">
              {about.college}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
              <span className="font-mono text-[12px] text-[var(--px-muted)]">
                ◎ {about.location}
              </span>
              <span className="font-mono text-[12px] text-[var(--px-muted)]">
                ◈ {about.focus}
              </span>
            </div>
          </motion.div>

          {/* Bio paragraphs */}
          <motion.div {...fadeUp(0.18)} className="flex flex-col gap-5">
            {about.bio.map((para, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="flex-shrink-0 self-stretch mt-1"
                  style={{ width: 2, background: "var(--px-accent)", opacity: i === 0 ? 0.8 : 0.25 }}
                />
                <p
                  className="font-sans text-[var(--px-muted)] leading-[1.75]"
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontWeight: i === 0 ? 500 : 400,
                    color: i === 0 ? "var(--px-text)" : "var(--px-muted)",
                  }}
                >
                  {para}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Stats grid */}
          <motion.div {...fadeUp(0.26)}>
            <p className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-[0.18em] mb-3">
              // profile.json
            </p>
            <div className="border border-[var(--px-border)]">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {about.stats.map((stat, i) => {
                  const isLastRow = i >= about.stats.length - 2
                  const isRightCol = i % 2 === 1
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 px-4 py-3 group transition-colors duration-150 hover:bg-[var(--px-surface)]"
                      style={{
                        borderBottom: isLastRow ? "none" : "1px solid var(--px-border)",
                        borderRight: isRightCol ? "none" : "1px solid var(--px-border)",
                      }}
                    >
                      <span
                        className="font-mono text-[var(--px-accent)] text-[12px] w-4 text-center flex-shrink-0"
                        style={{ opacity: 0.8 }}
                      >
                        {STAT_ICONS[stat.label] ?? "·"}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-wider flex-shrink-0 w-[72px]">
                        {stat.label}
                      </span>
                      <span className="font-mono text-[12px] text-[var(--px-text)] font-semibold flex items-center gap-1.5">
                        {stat.value}
                        {stat.label === "STATUS" && (
                          <span className="inline-block w-1.5 h-1.5 bg-green-400 animate-pulse flex-shrink-0" />
                        )}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}
