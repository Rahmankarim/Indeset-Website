"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

interface RelatedPostsProps {
  currentPostId: string
}

const relatedPosts = [
  {
    id: 2,
    title: "Building Scalable SaaS Applications with Next.js",
    excerpt: "Learn how to architect and build scalable SaaS applications using Next.js.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Tutorials",
    date: "2024-01-12",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "AI Integration in Modern Software Development",
    excerpt: "Discover how AI is revolutionizing software development processes.",
    image: "/placeholder.svg?height=200&width=300",
    category: "AI & Machine Learning",
    date: "2024-01-10",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Mobile-First Design: Best Practices for 2024",
    excerpt: "Essential guidelines for creating mobile-first designs.",
    image: "/placeholder.svg?height=200&width=300",
    category: "UI/UX Design",
    date: "2024-01-08",
    readTime: "6 min read",
  },
]

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
          <p className="text-muted-foreground">Continue reading with these related posts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-2">
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
