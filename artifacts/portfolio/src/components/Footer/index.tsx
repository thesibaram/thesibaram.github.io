import { PixelDivider } from "./PixelDivider";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "var(--px-bg)",
        borderTop: "1px solid var(--px-accent)",
      }}
    >
      <PixelDivider />
      <FooterTop />
      <PixelDivider />
      <FooterBottom />
    </footer>
  );
}
