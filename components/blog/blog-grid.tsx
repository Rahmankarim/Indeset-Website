"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web Development",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable SaaS Applications with Next.js",
    excerpt:
      "Learn how to architect and build scalable SaaS applications using Next.js, focusing on performance and user experience.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Tutorials",
    author: "Alex Johnson",
    date: "2024-01-12",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 3,
    title: "AI Integration in Modern Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing software development processes and improving developer productivity.",
    image: "/placeholder.svg?height=300&width=500",
    category: "AI & Machine Learning",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: 4,
    title: "Mobile-First Design: Best Practices for 2024",
    excerpt:
      "Essential guidelines for creating mobile-first designs that provide exceptional user experiences across all devices.",
    image: "/placeholder.svg?height=300&width=500",
    category: "UI/UX Design",
    author: "Emily Davis",
    date: "2024-01-08",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    title: "DevOps Automation: Streamlining Your Deployment Pipeline",
    excerpt:
      "Learn how to implement effective DevOps automation strategies to improve deployment efficiency and reduce errors.",
    image: "/placeholder.svg?height=300&width=500",
    category: "DevOps",
    author: "David Kim",
    date: "2024-01-05",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Case Study: Transforming a Legacy System into a Modern SaaS Platform",
    excerpt:
      "A detailed case study of how we helped a client modernize their legacy system into a scalable SaaS platform.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Case Studies",
    author: "Lisa Thompson",
    date: "2024-01-03",
    readTime: "15 min read",
    featured: false,
  },
]

export function BlogGrid() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                      <Link href={`/blog/${post.id}`} className="flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
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
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mb-3">{new Date(post.date).toLocaleDateString()}</div>

                    <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold group-hover:text-primary">
                      <Link href={`/blog/${post.id}`} className="flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button>1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
