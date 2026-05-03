import { FooterBio } from "./FooterBio";
import { FooterNav } from "./FooterNav";
import { FooterStatus } from "./FooterStatus";

export function FooterTop() {
  return (
    <div
      className="footer-top-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
        gap: "clamp(24px, 4vw, 48px)",
        padding: "40px clamp(16px, 6vw, 80px)",
        alignItems: "start",
      }}
    >
      <FooterBio />
      <FooterNav />
      <FooterStatus />
    </div>
  );
}
