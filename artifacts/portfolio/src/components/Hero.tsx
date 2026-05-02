import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroSprite } from "./pixels/HeroSprite";

const titles = [
  "ML Engineer",
  "Computer Vision Dev",
  "EE Student",
  "Building cool things"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const currentText = titles[titleIndex].substring(0, charIndex);

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(var(--px-border) 2px, transparent 2px)',
        backgroundSize: '32px 32px',
        backgroundPosition: '-16px -16px'
      }}
    >
      {/* Background fade overlay */}
      <div className="absolute inset-0 bg-[var(--px-bg)]/80 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="flex flex-col items-start"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="mb-8"
          >
            <HeroSprite className="sprite-idle" />
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-5xl md:text-7xl font-mono font-bold text-[var(--px-text)] tracking-tight mb-4"
          >
            Sibaram Nayak
          </motion.h1>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-2xl md:text-3xl font-mono text-[var(--px-accent)] mb-6 h-10 flex items-center"
          >
            <span>{currentText}</span>
            <span className="w-4 h-8 bg-[var(--px-accent)] ml-1 cursor-blink inline-block" />
          </motion.div>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-[var(--px-muted)] font-mono text-sm max-w-2xl leading-relaxed mb-10"
          >
            B.Tech EE @ PMEC | SIH 2024 National Finalist | Currently obsessed with CNNs and Grad-CAM
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="inline-flex h-12 items-center justify-center border border-[var(--px-accent)] bg-transparent text-[var(--px-accent)] font-mono px-8 pixel-hover uppercase font-bold"
              data-testid="btn-view-projects"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              className="inline-flex h-12 items-center justify-center border border-[var(--px-border)] bg-[var(--px-surface)] text-[var(--px-text)] font-mono px-8 pixel-hover uppercase font-bold"
              data-testid="btn-download-resume"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
