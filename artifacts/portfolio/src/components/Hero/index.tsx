import { HeroBackground } from "./HeroBackground"
import { HeroLeft } from "./HeroLeft"
import { HeroRight } from "./HeroRight"
import { ScrollIndicator } from "./ScrollIndicator"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '4rem' }}
      data-testid="hero-section"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-20 flex-1 flex items-center">
        <div className="grid md:grid-cols-[55fr_45fr] gap-12 w-full py-16">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}