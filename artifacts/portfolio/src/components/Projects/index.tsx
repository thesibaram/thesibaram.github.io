import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { PixelDivider } from "../pixels/PixelDivider";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectExpanded } from "./ProjectExpanded";
import { ProjectFilter } from "./ProjectFilter";

const FolderIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="2" y="3" width="6" height="2" />
    <rect x="2" y="5" width="12" height="8" />
  </svg>
);

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects = projects.filter((p) => {
    const catMatch = activeFilter === "All" || p.category === activeFilter;
    const featMatch = !featuredOnly || p.featured;
    return catMatch && featMatch;
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Projects" icon={<FolderIcon />} />
      <PixelDivider />

      {!featuredOnly && (
        <div className="mb-12 mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-[var(--px-accent)] uppercase tracking-wider">
              ★ Featured Work
            </span>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <div key={p.id} className="min-w-[300px] md:min-w-0 flex flex-col">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <ProjectCard
                    project={p}
                    isOpen={openId === p.id}
                    onToggle={() => setOpenId((prev) => (prev === p.id ? null : p.id))}
                  />
                  <AnimatePresence>
                    {openId === p.id && (
                      <motion.div
                        key="expanded"
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
              </div>
            ))}
          </div>
        </div>
      )}

      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={(f) => {
          setActiveFilter(f);
          setOpenId(null);
        }}
        featuredOnly={featuredOnly}
        onFeaturedToggle={() => setFeaturedOnly((p) => !p)}
      />

      <div className="grid md:grid-cols-2 gap-5">
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
              <p className="font-mono text-[var(--px-muted)] text-xs">More projects loading...</p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setFeaturedOnly(false);
                }}
                className="border border-[var(--px-border)] font-mono text-xs px-4 py-2 pixel-hover hover:border-[var(--px-accent)] hover:text-[var(--px-accent)] text-[var(--px-muted)]"
                data-testid="reset-filter"
              >
                Reset Filter
              </button>
            </motion.div>
          ) : (
            filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
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
    </motion.section>
  );
}
