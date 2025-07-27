import type { Metadata } from "next"
import { BlogPost } from "@/components/blog/blog-post"
import { RelatedPosts } from "@/components/blog/related-posts"

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params

  return {
    title: `Blog Post ${id} - Indeset`,
    description: "Read our latest insights on software development, AI, and technology trends.",
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params

  return (
    <div className="pt-16">
      <BlogPost id={id} />
      <RelatedPosts currentPostId={id} />
    </div>
  )
}
