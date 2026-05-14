import React from "react";

export function CRTMonitor({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`pixel-art ${className}`} 
      width="128" 
      height="96" 
      viewBox="0 0 32 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Monitor outline */}
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H30V18H2V2ZM0 0H32V20H0V0Z" fill="var(--px-text)" />
      
      {/* Screen interior */}
      <rect x="2" y="2" width="28" height="16" fill="var(--px-surface)" />
      
      {/* Monitor stand */}
      <rect x="12" y="20" width="8" height="2" fill="var(--px-text)" />
      <rect x="10" y="22" width="12" height="2" fill="var(--px-text)" />
      
      {/* Blinking cursor */}
      <rect x="4" y="4" width="2" height="4" fill="var(--px-accent)" className="crt-cursor" />
    </svg>
  );
}
