import { FooterBio } from "./FooterBio";
import { FooterNav } from "./FooterNav";
import { FooterStatus } from "./FooterStatus";

export function FooterTop() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "35% 30% 35%",
        gap: "clamp(24px, 4vw, 48px)",
        padding: "40px clamp(24px, 6vw, 80px)",
      }}
      className="footer-top-grid"
    >
      <FooterBio />
      <FooterNav />
      <FooterStatus />
    </div>
  );
}
