import type { Metadata } from "next"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"
import { PortfolioStats } from "@/components/portfolio/portfolio-stats"
import { PortfolioTestimonials } from "@/components/portfolio/portfolio-testimonials"

export const metadata: Metadata = {
  title: "Portfolio - Indeset",
  description:
    "Explore our portfolio of successful software development projects and case studies across various industries.",
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioGrid />
      <PortfolioTestimonials />
    </div>
  )
}
