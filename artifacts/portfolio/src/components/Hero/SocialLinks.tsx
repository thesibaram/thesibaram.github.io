import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { hero } from "@/data/hero"

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
}

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3 mt-6" data-testid="social-links">
      {hero.socials.map((s, i) => {
        const Icon = iconMap[s.icon] ?? Mail
        return (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.08, duration: 0.3 }}
            className="w-9 h-9 flex items-center justify-center border border-[var(--px-border)] text-[var(--px-muted)] transition-all duration-[120ms] hover:border-[var(--px-accent)] hover:text-[var(--px-accent)] hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{ '--hover-shadow': '4px 4px 0px var(--px-accent)' } as React.CSSProperties}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0px var(--px-accent)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
            data-testid={`social-${s.icon}`}
          >
            <Icon size={16} />
          </motion.a>
        )
      })}
    </div>
  )
}