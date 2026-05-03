import { motion } from "framer-motion"
import { ArrowDownToLine } from "lucide-react"
import { RoleTyper } from "./RoleTyper"
import { HeroStats } from "./HeroStats"
import { SocialLinks } from "./SocialLinks"
import { hero } from "@/data/hero"

export function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      className="flex flex-col justify-center w-full"
      data-testid="hero-right"
    >
      {/* Large editorial name */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
        className="mb-5 md:mb-7"
      >
        <h1
          className="font-mono font-black leading-[0.88]"
          style={{ fontSize: "clamp(42px, 10vw, 110px)", letterSpacing: "-1px" }}
          data-testid="hero-name"
        >
          <span className="block text-[var(--px-text)]">SIBARAM</span>
          <span
            className="block text-center"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px var(--px-accent)",
            }}
          >
            BEHERA
          </span>
        </h1>
      </motion.div>
      {/* Divider with role typer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="flex items-center gap-3 mb-5 md:mb-7"
      >
        <div className="h-px w-6 md:w-8 flex-shrink-0 bg-[var(--px-border)]" />
        <RoleTyper />
        <div className="h-px flex-1 bg-[var(--px-border)]" />
      </motion.div>
      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="font-sans text-[13px] md:text-[14px] text-[var(--px-muted)] leading-relaxed mb-6 md:mb-8 max-w-lg"
        data-testid="hero-tagline"
      >
        B.Tech Electrical Engineering at PMEC, Berhampur — building production-grade ML systems and computer vision models from Odisha. CNNs, transfer learning, Grad-CAM.
      </motion.p>
      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
        className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
        data-testid="hero-ctas"
      >
        <a
          href={hero.cta.primary.href}
          className="inline-flex items-center justify-center px-6 md:px-7 py-3 font-mono text-[11px] md:text-[12px] uppercase tracking-wider font-bold text-[#0D0D10] bg-[var(--px-accent)] border-2 border-[var(--px-accent)]"
          style={{ transition: "all 150ms ease" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "transparent"
            el.style.color = "var(--px-accent)"
            el.style.boxShadow = "5px 5px 0 var(--px-accent)"
            el.style.transform = "translate(-2px,-2px)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "var(--px-accent)"
            el.style.color = "#0D0D10"
            el.style.boxShadow = "none"
            el.style.transform = "none"
          }}
          data-testid="btn-view-projects"
        >
          {hero.cta.primary.label}
        </a>
        <a
          href={hero.cta.secondary.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 font-mono text-[11px] md:text-[12px] uppercase tracking-wider font-bold text-[var(--px-text)] border-2 border-[var(--px-border)] bg-transparent"
          style={{ transition: "all 150ms ease" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = "var(--px-text)"
            el.style.boxShadow = "5px 5px 0 var(--px-border)"
            el.style.transform = "translate(-2px,-2px)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = "var(--px-border)"
            el.style.boxShadow = "none"
            el.style.transform = "none"
          }}
          data-testid="btn-download-resume"
        >
          <ArrowDownToLine size={13} />
          {hero.cta.secondary.label}
        </a>
      </motion.div>
      {/* Stats */}
      <HeroStats />
      {/* Socials */}
      <SocialLinks />
    </motion.div>
  );
}
