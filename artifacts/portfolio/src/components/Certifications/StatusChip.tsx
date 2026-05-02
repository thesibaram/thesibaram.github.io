import { CertStatus } from "@/data/certifications"

interface Props { status: CertStatus }

export function StatusChip({ status }: Props) {
  if (status === "completed") {
    return (
      <span className="font-mono text-[10px] px-2 py-0.5 border border-[#22C55E] text-[#22C55E] leading-none">
        EARNED
      </span>
    )
  }
  if (status === "in-progress") {
    return (
      <span className="flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 border border-[#F59E0B] text-[#F59E0B] leading-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse flex-shrink-0" />
        IN PROGRESS
      </span>
    )
  }
  return (
    <span className="font-mono text-[10px] px-2 py-0.5 border border-dashed border-[var(--px-border)] text-[var(--px-muted)] leading-none">
      PLANNED
    </span>
  )
}
