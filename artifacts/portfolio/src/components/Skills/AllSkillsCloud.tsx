import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skillCategories } from "@/data/skills"
import { SkillChip } from "./SkillChip"
import type { Skill } from "@/data/skills"

const levelOrder: Record<string, number> = { core: 0, proficient: 1, familiar: 2 }

export function AllSkillsCloud() {
  const [open, setOpen] = useState(false)

  const allSkills: Skill[] = skillCategories
    .flatMap(c => c.skills)
    .sort((a, b) => levelOrder[a.level] - levelOrder[b.level])

  return (
    <div className="mt-6" data-testid="all-skills-cloud">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--px-accent)] hover:opacity-70 transition-opacity cursor-pointer"
        data-testid="toggle-all-skills"
      >
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          ▶
        </motion.span>
        {open ? "// collapse" : "// view all skills"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 mt-4">
              {allSkills.map((skill, i) => (
                <div
                  key={`${skill.name}-${i}`}
                  style={{ transform: skill.level === "core" ? 'scale(1.05)' : undefined }}
                >
                  <SkillChip skill={skill} index={i} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}