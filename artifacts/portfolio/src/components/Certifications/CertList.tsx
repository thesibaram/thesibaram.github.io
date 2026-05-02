import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { certifications, Certification } from "@/data/certifications"
import { CertRow } from "./CertRow"
import { EmptyState } from "./EmptyState"

type StatusFilter = "all" | Certification["status"]

interface Props {
  statusFilter: StatusFilter
  onResetFilters: () => void
}

export function CertList({ statusFilter, onResetFilters }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = certifications.filter(cert =>
    statusFilter === "all" || cert.status === statusFilter
  )

  function toggle(id: string) {
    setExpandedId(prev => prev === id ? null : id)
  }

  return (
    <div className="mt-4" data-testid="cert-list">
      {/* Table header */}
      <div className="hidden md:flex items-center border border-[var(--px-border)] bg-[var(--px-surface)] mb-px">
        <div className="w-12 flex-shrink-0" />
        <div className="flex-1 py-2 pr-4">
          <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest">Credential</span>
        </div>
        <div className="hidden md:block w-28 flex-shrink-0 py-2 pr-4">
          <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest">Date</span>
        </div>
        <div className="hidden lg:block w-36 flex-shrink-0 py-2 pr-4">
          <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest">Skills</span>
        </div>
        <div className="w-28 flex-shrink-0 py-2 pr-3">
          <span className="font-mono text-[10px] text-[var(--px-muted)] uppercase tracking-widest">Status</span>
        </div>
        <div className="w-8 flex-shrink-0" />
      </div>

      {/* Rows */}
      <div className="border border-[var(--px-border)] border-t-0">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div key="empty" className="py-8">
              <EmptyState onReset={onResetFilters} />
            </motion.div>
          ) : (
            filtered.map((cert, i) => (
              <CertRow
                key={cert.id}
                cert={cert}
                index={i}
                isExpanded={expandedId === cert.id}
                onToggle={() => toggle(cert.id)}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
