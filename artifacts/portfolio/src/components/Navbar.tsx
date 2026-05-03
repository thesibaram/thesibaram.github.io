import React, { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PixelLogo } from "./PixelLogo";

const links = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "blog", label: "Blog" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const activeSection = useActiveSection(links.map(l => l.id));
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const ThemeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="pixel-art">
      {theme === "dark" ? (
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM10 4a6 6 0 110 12A6 6 0 0110 4z" fill="currentColor" />
      ) : (
        <path d="M10 2v2m0 12v2M2 10h2m12 0h2m-2.83-5.66l-1.41 1.41M5.24 14.76l-1.41 1.41M16.83 14.76l-1.41-1.41M5.24 5.24l-1.41-1.41M10 6a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      )}
    </svg>
  );

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--px-bg)]/80 border-b border-[var(--px-border)] h-16">
        <div className="max-w-[1360px] mx-auto px-4 h-full flex items-center justify-between">
          {/* Pixel logo */}
          <div
            className="w-10 h-10 border border-[var(--px-border)] flex items-center justify-center pixel-hover cursor-pointer text-[var(--px-text)] relative overflow-hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="nav-logo"
            style={{ transition: "border-color 150ms ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--px-accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--px-border)"; }}
          >
            <PixelLogo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`pixel-hover px-2 py-1 transition-colors ${activeSection === link.id ? "text-[var(--px-accent)]" : "text-[var(--px-text)] hover:text-[var(--px-accent)]"}`}
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center border border-[var(--px-border)] pixel-hover text-[var(--px-text)]"
              data-testid="btn-theme-toggle"
              aria-label="Toggle Theme"
            >
              <ThemeIcon />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center border border-[var(--px-border)] pixel-hover text-[var(--px-text)]"
              data-testid="btn-theme-toggle-mobile"
              aria-label="Toggle Theme"
            >
              <ThemeIcon />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-[var(--px-text)]"
              data-testid="btn-mobile-menu"
              aria-label="Open Menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[var(--px-bg)] flex flex-col"
            data-testid="mobile-drawer"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--px-border)] h-16">
              <div className="w-10 h-10 border border-[var(--px-border)] flex items-center justify-center text-[var(--px-text)]">
                <PixelLogo />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[var(--px-text)]"
                data-testid="btn-close-menu"
                aria-label="Close Menu"
              >
                <X />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-4 font-mono text-lg mt-8">
              {links.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 border-b border-[var(--px-border)] ${activeSection === link.id ? "text-[var(--px-accent)]" : "text-[var(--px-text)]"}`}
                  data-testid={`mobile-nav-link-${link.id}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
