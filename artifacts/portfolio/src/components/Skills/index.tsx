import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { PixelDivider } from "@/components/pixels/PixelDivider"
import { skillCategories } from "@/data/skills"
import { PixelBarChart } from "./PixelBarChart"
import { CategoryTabs } from "./CategoryTabs"
import { CategoryPanel } from "./CategoryPanel"
import { LevelLegend } from "./LevelLegend"
import { AllSkillsCloud } from "./AllSkillsCloud"

const LightningIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="8" y="1" width="4" height="6" />
    <rect x="4" y="5" width="4" height="4" />
    <rect x="6" y="9" width="4" height="6" />
  </svg>
)

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[1360px] mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="Skills" icon={<LightningIcon />} />
      <PixelDivider />

      <PixelBarChart activeId={activeId} onCategoryClick={setActiveId} />
      <CategoryTabs activeId={activeId} onChange={setActiveId} />
      <CategoryPanel activeId={activeId} />
      <LevelLegend />
      <AllSkillsCloud />
    </motion.section>
  )
}