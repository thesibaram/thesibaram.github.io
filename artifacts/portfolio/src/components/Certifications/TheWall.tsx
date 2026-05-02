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
          padding: "40px 28px 32px",
        }}
      >
        {/* Wall label */}
        <span
          className="absolute font-mono uppercase tracking-widest"
          style={{ top: 10, left: 14, fontSize: 9, color: "var(--px-muted)" }}
        >
          // CREDENTIAL WALL
        </span>

        {/* Background texture */}
        <WallBackground />

        {/* Documents grid — min 240px so docs fit without squishing */}
        <div
          className="relative grid justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "48px 32px",
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
