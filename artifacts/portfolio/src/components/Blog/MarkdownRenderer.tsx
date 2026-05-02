import { ReactElement } from "react"
import { BlogPost } from "@/data/blog"

interface Props { post: BlogPost }

function HourglassIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="3" y="2" width="18" height="2" />
      <rect x="3" y="20" width="18" height="2" />
      <rect x="3" y="2" width="2" height="20" />
      <rect x="19" y="2" width="2" height="20" />
      <rect x="5" y="4" width="14" height="2" />
      <rect x="7" y="6" width="10" height="2" />
      <rect x="9" y="8" width="6" height="2" />
      <rect x="11" y="10" width="2" height="4" />
      <rect x="9" y="14" width="6" height="2" />
      <rect x="7" y="16" width="10" height="2" />
      <rect x="5" y="18" width="14" height="2" />
      <rect x="10" y="5" width="4" height="2" />
      <rect x="10" y="17" width="4" height="2" />
    </svg>
  )
}

function HardHatIcon() {
  return (
    <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
      <rect x="1" y="10" width="14" height="1" />
      <rect x="3" y="5" width="10" height="5" />
      <rect x="4" y="4" width="8" height="1" />
      <rect x="5" y="3" width="6" height="1" />
      <rect x="7" y="4" width="2" height="4" fill="var(--px-accent)" />
      <rect x="3" y="9" width="10" height="1" fill="var(--px-accent)" />
    </svg>
  )
}

export function MarkdownRenderer({ post }: Props) {
  if (post.status === "coming-soon") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <p className="font-sans text-[13px] text-[var(--px-muted)] max-w-lg">{post.preview}</p>
        <div className="flex flex-col items-center gap-3 mt-4">
          <HourglassIcon />
          <p className="font-mono text-[12px] text-[var(--px-muted)]">
            // Coming soon. The idea exists, the words do not yet.
          </p>
        </div>
      </div>
    )
  }

  if (post.status === "draft") {
    return (
      <div className="flex flex-col gap-4">
        <p className="font-sans text-[13px] text-[var(--px-muted)] leading-relaxed">{post.preview}</p>
        <div className="flex items-start gap-3 border border-dashed border-[var(--px-border)] p-4">
          <HardHatIcon />
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[12px] text-[var(--px-muted)]">// This post is currently being written.</p>
            <p className="font-mono text-[12px] text-[var(--px-muted)]">Check back soon or follow on GitHub for updates.</p>
          </div>
        </div>
      </div>
    )
  }

  // Published — simple markdown parser
  const lines = post.content.split('\n')
  const elements: ReactElement[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-mono text-[16px] text-[var(--px-text)] font-bold border-b border-dashed border-[var(--px-border)] pb-1 mt-4">{line.slice(3)}</h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-mono text-[14px] text-[var(--px-accent)] font-bold mt-3">{line.slice(4)}</h3>
      )
    } else if (line.startsWith('```')) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} className="bg-[var(--px-surface)] border border-[var(--px-border)] overflow-x-auto p-4 mt-2" style={{ borderLeft: '3px solid var(--px-accent)' }}>
          <code className="font-mono text-[12px] text-[var(--px-text)]">{codeLines.join('\n')}</code>
        </pre>
      )
    } else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="font-sans text-[14px] text-[var(--px-muted)] italic p-3 mt-2 bg-[var(--px-surface)]" style={{ borderLeft: '3px solid var(--px-accent2)' }}>
          {line.slice(2)}
        </blockquote>
      )
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <li key={i} className="font-sans text-[14px] text-[var(--px-text)] ml-4 mt-1">{line.slice(2)}</li>
      )
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="font-sans text-[14px] text-[var(--px-text)] leading-[1.7] mt-2">{line}</p>
      )
    }
    i++
  }

  return <div className="flex flex-col gap-1 mt-4">{elements}</div>
}
