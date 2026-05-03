import { motion } from "framer-motion";
import { ContactLeft } from "./ContactLeft";
import { ContactRight } from "./ContactRight";

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
      style={{
        background: "var(--px-surface)",
        borderTop: "1px solid var(--px-border)",
        borderBottom: "1px solid var(--px-border)",
      }}
    >
      <div className="max-w-[1360px] mx-auto px-4 md:px-6 py-24 w-full">
        <div
          className="grid gap-12 lg:gap-20"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          }}
        >
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </motion.section>
  );
}
