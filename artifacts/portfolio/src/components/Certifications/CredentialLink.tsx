interface Props { url: string }

export function CredentialLink({ url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--px-accent)] border border-[var(--px-accent)] px-3 py-1.5 transition-all duration-[120ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--px-accent)]/10"
      style={{ boxShadow: 'none' }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0px var(--px-accent)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
    >
      [ VERIFY CREDENTIAL ]
      <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: 'pixelated' }}>
        <rect x="4" y="1" width="3" height="1" /><rect x="6" y="2" width="1" height="2" />
        <rect x="1" y="4" width="5" height="1" /><rect x="1" y="5" width="1" height="2" />
        <rect x="2" y="6" width="5" height="1" />
      </svg>
    </a>
  )
}
