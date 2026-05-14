import { HeroBackground } from "./HeroBackground"
import { HeroLeft } from "./HeroLeft"
import { HeroRight } from "./HeroRight"
import { ScrollIndicator } from "./ScrollIndicator"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "4rem" }}
      data-testid="hero-section"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 md:px-10 flex-1 flex items-center">
        {/* Mobile: stacked (photo top, content below). Desktop: two-column side by side */}
        <div className="flex flex-col md:grid md:grid-cols-[42fr_58fr] gap-8 md:gap-20 w-full py-10 md:py-16 items-center">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
