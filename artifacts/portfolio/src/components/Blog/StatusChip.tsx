import { BlogStatus } from "@/data/blog"

interface Props { status: BlogStatus }

export function StatusChip({ status }: Props) {
  if (status === "published") {
    return (
      <span className="flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 border border-[#22C55E] text-[#22C55E]">
        <span className="w-1.5 h-1.5 bg-[#22C55E] flex-shrink-0" />
        LIVE
      </span>
    )
  }
  if (status === "draft") {
    return (
      <span className="flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 border border-[#F59E0B] text-[#F59E0B]">
        <span className="w-1.5 h-1.5 bg-[#F59E0B] animate-pulse flex-shrink-0" />
        DRAFTING
      </span>
    )
  }
  return (
    <span className="font-mono text-[10px] px-2 py-0.5 border border-dashed border-[var(--px-border)] text-[var(--px-muted)]">
      SOON
    </span>
  )
}
