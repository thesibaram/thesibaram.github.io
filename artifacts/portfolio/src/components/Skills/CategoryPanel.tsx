import { motion, AnimatePresence } from "framer-motion"
import { skillCategories } from "@/data/skills"
import { SkillChip } from "./SkillChip"

interface Props { activeId: string }

export function CategoryPanel({ activeId }: Props) {
  const category = skillCategories.find(c => c.id === activeId)
  if (!category) return null

  return (
    <div className="mt-6 border border-[var(--px-border)] p-6" data-testid="category-panel">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-5 pb-3 border-b border-dashed border-[var(--px-border)]">
        <span className="font-mono text-[14px] text-[var(--px-text)] font-bold">{category.label}</span>
        <span className="font-sans text-[12px] text-[var(--px-muted)] italic">{category.description}</span>
      </div>
      {/* Chip grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.18 }}
          className="grid gap-2.5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}
        >
          {category.skills.map((skill, i) => (
            <SkillChip key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}