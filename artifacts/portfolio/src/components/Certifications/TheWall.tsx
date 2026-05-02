import { useState } from "react"
import { certifications, Certification } from "@/data/certifications"
import { PinnedDoc } from "./PinnedDoc"
import { StickyNote } from "./StickyNote"
import { WallBackground } from "./WallBackground"
import { CertModal } from "./CertModal"

export function TheWall() {
  const [selected, setSelected] = useState<Certification | null>(null)

  return (
    <div className="mt-8">
      {/* Wall container */}
      <div
        className="relative"
        style={{
          border: "2px solid var(--px-border)",
          padding: 24,
          paddingTop: 36,
        }}
      >
        {/* Wall label */}
        <span
          className="absolute font-mono uppercase tracking-widest"
          style={{
            top: 8,
            left: 12,
            fontSize: 9,
            color: "var(--px-muted)",
          }}
        >
          // CREDENTIAL WALL
        </span>

        {/* Background texture */}
        <WallBackground />

        {/* Documents grid */}
        <div
          className="relative grid justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "32px 24px",
          }}
        >
          {certifications.map((cert, i) =>
            cert.status === "planned" ? (
              <StickyNote
                key={cert.id}
                cert={cert}
                index={i}
                onOpen={() => setSelected(cert)}
              />
            ) : (
              <PinnedDoc
                key={cert.id}
                cert={cert}
                index={i}
                onOpen={() => setSelected(cert)}
              />
            )
          )}
        </div>
      </div>

      {/* Modal */}
      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
