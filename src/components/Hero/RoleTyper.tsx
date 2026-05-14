import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { hero } from "@/data/hero"

export function RoleTyper() {
  const [displayed, setDisplayed] = useState("")
  const [roleIdx, setRoleIdx] = useState(0)
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">("typing")
  const charRef = useRef(0)

  useEffect(() => {
    const role = hero.roles[roleIdx]
    let t: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (charRef.current < role.length) {
        t = setTimeout(() => {
          charRef.current++
          setDisplayed(role.slice(0, charRef.current))
        }, 20)
      } else {
        t = setTimeout(() => setPhase("holding"), 1800)
      }
    } else if (phase === "holding") {
      setPhase("deleting")
    } else if (phase === "deleting") {
      if (charRef.current > 0) {
        t = setTimeout(() => {
          charRef.current--
          setDisplayed(role.slice(0, charRef.current))
        }, 10)
      } else {
        t = setTimeout(() => {
          setRoleIdx(i => (i + 1) % hero.roles.length)
          setPhase("typing")
        }, 200)
      }
    }
    return () => clearTimeout(t)
  }, [phase, displayed, roleIdx])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      className="flex items-center gap-1 mt-4 h-7"
      data-testid="role-typer"
    >
      <span className="font-mono text-[18px] text-[var(--px-muted)]">// </span>
      <span className="font-mono text-[18px] text-[var(--px-accent)]">{displayed}</span>
      <span
        className="font-mono text-[18px] text-[var(--px-accent)]"
        style={{ animation: 'blink 0.6s step-end infinite' }}
      >|</span>
    </motion.div>
  )
}