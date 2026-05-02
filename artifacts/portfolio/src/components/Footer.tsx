import React from "react";

export function Footer() {
  return (
    <footer className="bg-[var(--px-surface)] border-t-2 border-[var(--px-accent)] py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm text-[var(--px-text)] text-center md:text-left">
          Sibaram Nayak — built with React + Tailwind + caffeine
        </div>
        
        <div className="flex items-center gap-4 text-[var(--px-text)]">
          <a href="https://github.com/thesibaram" target="_blank" rel="noreferrer" className="pixel-hover w-8 h-8 flex items-center justify-center border border-[var(--px-border)] hover:text-[var(--px-accent)] hover:border-[var(--px-accent)] transition-colors">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 pixel-art"><rect x="4" y="2" width="8" height="12"/><rect x="2" y="4" width="12" height="8"/><rect x="6" y="6" width="4" height="4" fill="var(--px-surface)"/></svg>
          </a>
          <a href="https://linkedin.com/in/sibaram" target="_blank" rel="noreferrer" className="pixel-hover w-8 h-8 flex items-center justify-center border border-[var(--px-border)] hover:text-[var(--px-accent)] hover:border-[var(--px-accent)] transition-colors">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 pixel-art"><rect x="2" y="2" width="12" height="12"/><rect x="4" y="6" width="2" height="6" fill="var(--px-surface)"/><rect x="8" y="6" width="4" height="6" fill="var(--px-surface)"/></svg>
          </a>
          <a href="mailto:sibaram@example.com" className="pixel-hover w-8 h-8 flex items-center justify-center border border-[var(--px-border)] hover:text-[var(--px-accent)] hover:border-[var(--px-accent)] transition-colors">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 pixel-art"><rect x="2" y="4" width="12" height="8"/><rect x="4" y="6" width="8" height="4" fill="var(--px-surface)"/><rect x="6" y="8" width="4" height="2" fill="currentColor"/></svg>
          </a>
        </div>
        
        <div className="font-mono text-xs text-[var(--px-muted)] text-center md:text-right">
          2025 — no rights reserved, use what you want
        </div>
      </div>
    </footer>
  );
}
