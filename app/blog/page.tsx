import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"

export const metadata: Metadata = {
  title: "Blog - Indeset",
  description:
    "Stay updated with the latest insights, tutorials, and industry trends in software development, AI, and technology.",
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  )
}
