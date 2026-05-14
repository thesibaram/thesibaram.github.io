import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { hero } from "@/data/hero"

const iconMap: Record<string, React.ElementType> = {
  github:    Github,
  linkedin:  Linkedin,
  instagram: Instagram,
  mail:      Mail,
}

const colorMap: Record<string, string> = {
  github:    "#6E5494",
  linkedin:  "#0A66C2",
  instagram: "#E1306C",
  mail:      "var(--px-accent)",
}

export function SocialLinks() {
  return (
    <div
      className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mt-6 w-full"
      data-testid="social-links"
    >
      {hero.socials.map((s, i) => {
        const Icon  = iconMap[s.icon]  ?? Mail
        const color = colorMap[s.icon] ?? "var(--px-accent)"

        return (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.35 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[var(--px-border)] bg-[var(--px-surface)] text-[var(--px-muted)]"
            style={{ textDecoration: "none", transition: "all 120ms ease" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = color
              el.style.color       = color
              el.style.transform   = "translate(-2px,-2px)"
              el.style.boxShadow   = `4px 4px 0 ${color}40`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = "var(--px-border)"
              el.style.color       = "var(--px-muted)"
              el.style.transform   = ""
              el.style.boxShadow   = ""
            }}
            data-testid={`social-${s.icon}`}
          >
            <Icon size={14} style={{ flexShrink: 0 }} />
            <span
              className="font-mono font-semibold uppercase tracking-wider"
              style={{ fontSize: "11px" }}
            >
              {s.label}
            </span>
          </motion.a>
        )
      })}
    </div>
  )
}
