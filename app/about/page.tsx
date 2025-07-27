import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { TeamSection } from "@/components/about/team-section"
import { CompanyCulture } from "@/components/about/company-culture"

export const metadata: Metadata = {
  title: "About Us - Indeset",
  description: "Learn about Indeset's journey, values, and the talented team behind our innovative software solutions.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <CompanyCulture />
    </div>
  )
}
