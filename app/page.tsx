import { HeroSection } from "@/components/hero-section"
import { ClientsSection } from "@/components/clients-section"
import { ServicesSection } from "@/components/services-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
