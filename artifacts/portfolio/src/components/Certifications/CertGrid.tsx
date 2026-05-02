import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { certifications, Certification } from "@/data/certifications"
import { CertCard } from "./CertCard"
import { EmptyState } from "./EmptyState"

type StatusFilter = "all" | Certification["status"]
type CategoryFilter = "all" | Certification["category"]

interface Props {
  statusFilter: StatusFilter
  categoryFilter: CategoryFilter
  onResetFilters: () => void
}

export function CertGrid({ statusFilter, categoryFilter, onResetFilters }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = certifications.filter(cert => {
    const statusMatch = statusFilter === "all" || cert.status === statusFilter
    const catMatch = categoryFilter === "all" || cert.category === categoryFilter
    return statusMatch && catMatch
  })

  function toggle(id: string) {
    setExpandedId(prev => prev === id ? null : id)
  }

  return (
    <div className="mt-6">
      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <EmptyState key="empty" onReset={onResetFilters} />
        ) : (
          <motion.div
            key="grid"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0"
            style={{ gap: '1px', background: 'var(--px-border)' }}
          >
            {filtered.map((cert, i) => (
              <div key={cert.id} style={{ background: 'var(--px-bg)' }}>
                <CertCard
                  cert={cert}
                  index={i}
                  isExpanded={expandedId === cert.id}
                  onToggle={() => toggle(cert.id)}
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
