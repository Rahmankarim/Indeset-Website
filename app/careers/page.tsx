import type { Metadata } from "next"
import { CareersHero } from "@/components/careers/careers-hero"
import { JobListings } from "@/components/careers/job-listings"
import { CompanyBenefits } from "@/components/careers/company-benefits"
import { WorkCulture } from "@/components/careers/work-culture"
import { ApplicationForm } from "@/components/careers/application-form"

export const metadata: Metadata = {
  title: "Careers - Indeset",
  description:
    "Join our team of talented developers and designers. Explore career opportunities at Indeset and help us build the future of software.",
}

export default function CareersPage() {
  return (
    <div className="pt-16">
      <CareersHero />
      <JobListings />
      <CompanyBenefits />
      <WorkCulture />
      <ApplicationForm />
    </div>
  )
}
