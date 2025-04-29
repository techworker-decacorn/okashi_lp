import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { VisualShowcase } from "@/components/visual-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { UnboxingExperience } from "@/components/unboxing-experience"
import { PricingSection } from "@/components/pricing-section"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <FeatureSection />
      <VisualShowcase />
      <HowItWorks />
      <UnboxingExperience />
      <PricingSection />
      <Testimonials />
      <FaqSection />
      <Footer />
    </div>
  )
}
