import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicePricing } from "@/components/services/service-pricing"
import { ServiceFAQ } from "@/components/services/service-faq"

export const metadata: Metadata = {
  title: "Our Services - Indeset",
  description:
    "Comprehensive software development services including custom software, mobile apps, SaaS products, UI/UX design, DevOps, and AI solutions.",
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ServicePricing />
      <ServiceFAQ />
    </div>
  )
}
