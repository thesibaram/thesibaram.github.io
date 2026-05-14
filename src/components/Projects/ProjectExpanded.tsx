import { Project } from "../../data/projects";
import { PixelChip } from "../ui/PixelChip";

interface ProjectExpandedProps {
  project: Project;
}

export function ProjectExpanded({ project }: ProjectExpandedProps) {
  return (
    <div className="p-5 pt-0 flex flex-col gap-4">
      <hr className="border-dashed border-[var(--px-border)] mb-2" />

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] text-[var(--px-accent)] uppercase tracking-wider flex items-center gap-1">
          <span className="font-bold">[&gt;]</span> THE PROBLEM
        </span>
        <p className="text-[13px] text-[var(--px-muted)] leading-relaxed">
          {project.problem}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] text-[var(--px-accent)] uppercase tracking-wider flex items-center gap-1">
          <span className="font-bold">[&gt;]</span> THE APPROACH
        </span>
        <p className="text-[13px] text-[var(--px-muted)] leading-relaxed">
          {project.approach}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] text-[var(--px-accent)] uppercase tracking-wider flex items-center gap-1">
          <span className="font-bold">[&gt;]</span> THE OUTCOME
        </span>
        <p className="text-[13px] text-[var(--px-muted)] leading-relaxed">
          {project.outcome}
          {project.status === "in-progress" && (
            <span className="inline-block mt-1 px-2 py-0.5 border border-[#F59E0B] text-[#F59E0B] font-mono text-[10px] ml-2">
              Work in progress
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-2">
        {project.techStack.map((tech) => (
          <PixelChip key={tech}>{tech}</PixelChip>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap mt-2">
        {project.links.demo && project.links.demo !== "#" && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
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
            className="border border-[var(--px-border)] font-mono text-[11px] px-2 py-0.5 pixel-hover text-[var(--px-text)] hover:text-[var(--px-accent)] hover:border-[var(--px-accent)]"
          >
            [Paper]
          </a>
        )}
      </div>
    </div>
  );
}
