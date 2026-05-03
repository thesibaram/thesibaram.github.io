import { motion, AnimatePresence } from "framer-motion"
import { skillCategories } from "@/data/skills"
import { SkillChip } from "./SkillChip"

interface Props { activeId: string }

export function CategoryPanel({ activeId }: Props) {
  const category = skillCategories.find(c => c.id === activeId)
  if (!category) return null

  const coreCount = category.skills.filter(s => s.level === "core").length
  const profCount = category.skills.filter(s => s.level === "proficient").length
  const famCount  = category.skills.filter(s => s.level === "familiar").length

  return (
    <div className="mt-0 border border-[var(--px-border)] border-t-0" data-testid="category-panel">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 border-b border-dashed border-[var(--px-border)]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[14px] text-[var(--px-text)] font-bold">{category.label}</span>
          <span className="font-sans text-[12px] text-[var(--px-muted)] italic">{category.description}</span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {coreCount > 0 && (
            <span className="font-mono text-[10px] text-[var(--px-accent)] border border-[var(--px-accent)] px-1.5 py-0.5">
              {coreCount} core
            </span>
          )}
          {profCount > 0 && (
            <span className="font-mono text-[10px] text-[var(--px-accent2)] border border-[var(--px-accent2)] px-1.5 py-0.5">
              {profCount} proficient
            </span>
          )}
          {famCount > 0 && (
            <span className="font-mono text-[10px] text-[var(--px-muted)] border border-[var(--px-border)] px-1.5 py-0.5">
              {famCount} familiar
            </span>
          )}
        </div>
      </div>

      {/* Chip grid */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.16 }}
            className="grid gap-2.5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            style={{}}
          >
            {category.skills.map((skill, i) => (
              <SkillChip key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
