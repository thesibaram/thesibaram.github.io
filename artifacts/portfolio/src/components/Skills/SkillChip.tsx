import { memo } from "react"
import { motion } from "framer-motion"
import { Skill } from "@/data/skills"
import { PixelLevelBar } from "./PixelLevelBar"

interface Props { skill: Skill; index: number }

export const SkillChip = memo(function SkillChip({ skill, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.2 }}
      className="flex items-center gap-2 h-11 px-3 border border-[var(--px-border)] bg-[var(--px-surface)] cursor-default transition-all duration-[120ms] hover:border-[var(--px-accent)] hover:bg-[var(--px-accent)]/[0.08] hover:-translate-x-0.5 hover:-translate-y-0.5 group"
      style={{ boxShadow: 'none' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0px var(--px-accent)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
      data-testid={`skill-chip-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <PixelLevelBar level={skill.level} />
      <span className="font-mono text-[12px] text-[var(--px-text)] group-hover:text-[var(--px-accent)] transition-colors duration-[120ms] leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )
})