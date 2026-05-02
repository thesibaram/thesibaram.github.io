import { motion } from "framer-motion"
import { SectionHeader } from "../ui/SectionHeader"
import { PixelDivider } from "../pixels/PixelDivider"
import { AboutImage } from "./AboutImage"
import { FunFactTicker } from "./FunFactTicker"
import { TerminalBio } from "./TerminalBio"
import { StatBlock } from "./StatBlock"

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
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="About" icon={<PersonIcon />} />
      <PixelDivider />

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-16 mt-10 items-start">
        {/* LEFT: Image + ticker */}
        <div className="flex flex-col items-start gap-0">
          <AboutImage />
          <FunFactTicker />
        </div>

        {/* RIGHT: Terminal + stat block */}
        <div className="flex flex-col">
          <TerminalBio />
          <StatBlock />
        </div>
      </div>
    </motion.section>
  )
}
