import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { PixelDivider } from "../pixels/PixelDivider";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectExpanded } from "./ProjectExpanded";
import { ProjectFilter } from "./ProjectFilter";

const INITIAL_VISIBLE = 3;

const FolderIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="2" y="3" width="6" height="2" />
    <rect x="2" y="5" width="12" height="8" />
  </svg>
);

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" className="pixel-art">
      <rect x="5" y="0" width="6" height="2" />
      <rect x="3" y="2" width="10" height="2" />
      <rect x="2" y="4" width="12" height="2" />
      <rect x="1" y="6" width="14" height="4" />
      <rect x="2" y="10" width="5" height="2" />
      <rect x="9" y="10" width="5" height="2" />
      <rect x="2" y="12" width="4" height="2" />
      <rect x="10" y="12" width="4" height="2" />
      <rect x="2" y="14" width="3" height="2" />
      <rect x="11" y="14" width="3" height="2" />
    </svg>
  );
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter((p) =>
    activeFilter === "All" || p.category === activeFilter
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_VISIBLE);

  const hiddenCount = filteredProjects.length - INITIAL_VISIBLE;
  const hasMore = filteredProjects.length > INITIAL_VISIBLE;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleFilterChange = (f: string) => {
    setActiveFilter(f);
    setOpenId(null);
    setShowAll(false);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[1360px] mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="Projects" icon={<FolderIcon />} />
      <PixelDivider />

      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        totalCount={projects.length}
        filteredCount={filteredProjects.length}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              className="col-span-full flex flex-col items-center justify-center py-20 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="font-mono text-4xl text-[var(--px-border)]">[ ]</div>
              <p className="font-mono text-[var(--px-muted)] text-sm">
                Nothing in this category yet.
              </p>
              <button
                onClick={() => handleFilterChange("All")}
                className="border border-[var(--px-border)] font-mono text-xs px-4 py-2 hover:border-[var(--px-accent)] hover:text-[var(--px-accent)] text-[var(--px-muted)] transition-colors"
                data-testid="reset-filter"
              >
                Reset Filter
              </button>
            </motion.div>
          ) : (
            visibleProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                className="flex flex-col"
              >
                <ProjectCard
                  project={p}
                  isOpen={openId === p.id}
                  onToggle={() => setOpenId((prev) => (prev === p.id ? null : p.id))}
                />
                <AnimatePresence>
                  {openId === p.id && (
                    <motion.div
                      key="exp"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border border-t-0 border-[var(--px-border)] bg-[var(--px-surface)]"
                    >
                      <ProjectExpanded project={p} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Load More / Show Less + GitHub CTA */}
      {filteredProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Left: load more toggle */}
          <div className="flex items-center gap-3">
            {hasMore && (
              <motion.button
                onClick={() => {
                  setShowAll((prev) => !prev);
                  setOpenId(null);
                }}
                whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0 var(--px-accent)" }}
                transition={{ duration: 0.1 }}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--px-accent)",
                  border: "1px solid var(--px-accent)",
                  padding: "8px 18px",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                {showAll
                  ? "[ ↑ SHOW LESS ]"
                  : `[ ↓ LOAD ${hiddenCount} MORE ]`}
              </motion.button>
            )}

            {hasMore && (
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "9px",
                  color: "var(--px-muted)",
                  letterSpacing: "0.08em",
                }}
              >
                {showAll
                  ? `showing all ${filteredProjects.length}`
                  : `showing ${Math.min(INITIAL_VISIBLE, filteredProjects.length)} of ${filteredProjects.length}`}
              </span>
            )}
          </div>

          {/* Right: GitHub CTA */}
          <motion.a
            href="https://github.com/thesibaram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0 rgba(0,180,216,0.3)" }}
            transition={{ duration: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--px-text)",
              border: "1px solid var(--px-border)",
              padding: "8px 18px",
              textDecoration: "none",
              background: "var(--px-surface)",
              transition: "border-color 120ms, color 120ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--px-accent)";
              e.currentTarget.style.color = "var(--px-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--px-border)";
              e.currentTarget.style.color = "var(--px-text)";
            }}
          >
            <GitHubIcon />
            VIEW ALL ON GITHUB →
          </motion.a>
        </motion.div>
      )}
    </motion.section>
  );
}
