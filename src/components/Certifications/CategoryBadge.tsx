import { Certification, categoryConfig } from "@/data/certifications"

interface Props { category: Certification["category"] }

export function CategoryBadge({ category }: Props) {
  const cfg = categoryConfig[category]
  return (
    <span
      className="font-mono text-[10px] px-2 py-0.5 border leading-none"
      style={{ color: cfg.color, borderColor: cfg.color }}
    >
      {cfg.label}
    </span>
  )
}
