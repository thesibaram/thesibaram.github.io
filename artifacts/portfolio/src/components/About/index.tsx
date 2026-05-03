import { motion } from "framer-motion"
import { SectionHeader } from "../ui/SectionHeader"
import { PixelDivider } from "../pixels/PixelDivider"
import { AboutImage } from "./AboutImage"
import { FunFactTicker } from "./FunFactTicker"
import { TerminalBio } from "./TerminalBio"
import { StatBlock } from "./StatBlock"
import { about } from "../../data/about"

const PersonIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="5" y="2" width="6" height="6" />
    <rect x="3" y="9" width="10" height="7" />
  </svg>
)

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[1360px] mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="About" icon={<PersonIcon />} />
      <PixelDivider />

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-[auto_1fr] gap-12 xl:gap-20 mt-10 items-start">
        {/* LEFT: Image + ticker */}
        <div className="flex flex-col items-start gap-0">
          <AboutImage />
          <FunFactTicker />
        </div>

        {/* RIGHT: Identity header + bio + stats */}
        <div className="flex flex-col gap-6">
          {/* Identity header */}
          <div className="pb-5 border-b border-[var(--px-border)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2
                  className="font-mono font-bold text-[var(--px-text)] tracking-tight leading-none"
                  style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
                >
                  {about.name}
                </h2>
                <p className="font-mono text-[12px] text-[var(--px-accent)] mt-2 tracking-wider uppercase">
                  {about.role}
                </p>
                <p className="font-sans text-[13px] text-[var(--px-muted)] mt-1">
                  {about.college}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-right flex-shrink-0">
                <span className="font-mono text-[10px] text-[var(--px-muted)] tracking-widest uppercase">
                  {about.focus}
                </span>
                <span className="font-mono text-[10px] text-[var(--px-muted)]">
                  {about.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <TerminalBio />

          {/* Stats */}
          <StatBlock />
        </div>
      </div>
    </motion.section>
  )
}
