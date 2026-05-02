import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "../../data/projects";
import { CategoryBadge } from "./CategoryBadge";
import { StatusChip } from "./StatusChip";
import { MetricBadge } from "./MetricBadge";
import { PixelChip } from "../ui/PixelChip";

interface ProjectCardProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, isOpen, onToggle }: ProjectCardProps) {
  return (
    <motion.div
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      data-testid={`project-card-${project.id}`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0 var(--px-accent)" }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="min-h-[220px] border border-[var(--px-border)] bg-[var(--px-surface)] p-5 flex flex-col gap-3 cursor-pointer rounded-none"
    >
      <div className="flex justify-between items-start">
        <CategoryBadge category={project.category} />
        <StatusChip status={project.status} />
      </div>

      <h3 className="font-mono font-bold text-[var(--px-text)] text-lg leading-tight mt-1">
        {project.title}
      </h3>

      <p className="text-[var(--px-muted)] text-[13px] leading-snug line-clamp-2">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.techStack.slice(0, 4).map((tech) => (
          <PixelChip key={tech}>{tech}</PixelChip>
        ))}
        {project.techStack.length > 4 && (
          <PixelChip>+{project.techStack.length - 4} more</PixelChip>
        )}
      </div>

      {project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs mt-1">
          {project.metrics.map((metric, idx) => (
            <div key={metric.label} className="flex items-center gap-2">
              <MetricBadge label={metric.label} value={metric.value} />
              {idx < project.metrics!.length - 1 && (
                <span className="text-[var(--px-muted)]">|</span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4 flex justify-between items-center">
        <div className="flex gap-2">
          {project.links.demo && project.links.demo !== "#" && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="border border-[var(--px-border)] font-mono text-[11px] px-2 py-0.5 pixel-hover text-[var(--px-text)] hover:text-[var(--px-accent)] hover:border-[var(--px-accent)]"
            >
              [Live Demo]
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="border border-[var(--px-border)] font-mono text-[11px] px-2 py-0.5 pixel-hover text-[var(--px-text)] hover:text-[var(--px-accent)] hover:border-[var(--px-accent)]"
            >
              [GitHub]
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="border border-[var(--px-border)] font-mono text-[11px] px-2 py-0.5 pixel-hover text-[var(--px-text)] hover:text-[var(--px-accent)] hover:border-[var(--px-accent)]"
            >
              [Paper]
            </a>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[var(--px-muted)]">{project.year}</span>
          <ChevronDown
            className="w-4 h-4 text-[var(--px-muted)]"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
