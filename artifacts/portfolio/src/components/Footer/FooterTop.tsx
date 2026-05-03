import { FooterBio } from "./FooterBio";
import { FooterNav } from "./FooterNav";
import { FooterStatus } from "./FooterStatus";

export function FooterTop() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gap: "clamp(24px, 4vw, 48px)",
        padding: "48px clamp(24px, 6vw, 80px)",
        alignItems: "start",
      }}
      className="footer-top-grid"
    >
      <FooterBio />
      <FooterNav />
      <FooterStatus />
    </div>
  );
}
