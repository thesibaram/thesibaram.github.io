import { motion } from "framer-motion"
import { ArrowDownToLine } from "lucide-react"
import { StatusBadge } from "./StatusBadge"
import { RoleTyper } from "./RoleTyper"
import { SocialLinks } from "./SocialLinks"
import { HeroStats } from "./HeroStats"
import { hero } from "@/data/hero"

export function HeroLeft() {
  return (
    <div className="flex flex-col h-full justify-center" data-testid="hero-left">
      <StatusBadge />

      {/* Name block */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="font-mono font-bold leading-[0.92] tracking-[-2px]"
          style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}
          data-testid="hero-name-line1"
        >
          SIBARAM
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="font-mono font-bold leading-[0.92] tracking-[-2px]"
          style={{
            fontSize: 'clamp(42px, 6vw, 72px)',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 0 0 var(--px-accent), -2px 0 0 var(--px-accent), 0 2px 0 var(--px-accent), 0 -2px 0 var(--px-accent)'
          }}
          data-testid="hero-name-line2"
        >
          BEHERA
        </motion.div>
      </div>

      <RoleTyper />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="font-sans text-[14px] text-[var(--px-muted)] mt-3"
        data-testid="hero-tagline"
      >
        {hero.tagline.split('|').map((part, i, arr) => (
          <span key={i}>
            {part.trim()}
            {i < arr.length - 1 && <span className="text-[var(--px-accent)] mx-2">|</span>}
          </span>
        ))}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-wrap gap-4 mt-8"
        data-testid="hero-ctas"
      >
        <a
          href={hero.cta.primary.href}
          className="inline-flex items-center justify-center px-7 py-3 font-mono text-[13px] uppercase tracking-wider font-bold text-[#0D0D10] bg-[var(--px-accent)] border-2 border-[var(--px-accent)] transition-all duration-[120ms] hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-0 active:translate-y-0"
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'transparent'
            el.style.color = 'var(--px-accent)'
            el.style.boxShadow = '6px 6px 0px var(--px-accent)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--px-accent)'
            el.style.color = '#0D0D10'
            el.style.boxShadow = 'none'
          }}
          onMouseDown={e => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = 'translate(0,0)'
            el.style.boxShadow = 'none'
          }}
          data-testid="btn-view-projects"
        >
          {hero.cta.primary.label}
        </a>
        <a
          href={hero.cta.secondary.href}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 font-mono text-[13px] uppercase tracking-wider font-bold text-[var(--px-text)] border-2 border-[var(--px-border)] bg-transparent transition-all duration-[120ms] hover:border-[var(--px-text)] hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-0 active:translate-y-0"
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0px var(--px-border)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
          onMouseDown={e => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = 'translate(0,0)'
            el.style.boxShadow = 'none'
          }}
          data-testid="btn-download-resume"
        >
          <ArrowDownToLine size={14} />
          {hero.cta.secondary.label}
        </a>
      </motion.div>

      <SocialLinks />
      <HeroStats />
    </div>
  )
}