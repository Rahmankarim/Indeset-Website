"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Share2, Heart, MessageCircle } from "lucide-react"

interface BlogPostProps {
  id: string
}

// This would typically come from a CMS or API
const getBlogPost = (id: string) => {
  return {
    id,
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>The landscape of web development is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code completion to automated testing, AI tools are becoming indispensable for modern developers.</p>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications, offering app-like experiences with the reach of the web.</p>
      
      <h2>3. WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, opening up new possibilities for web-based software.</p>
      
      <h2>4. Serverless Architecture</h2>
      <p>Serverless computing is changing how we think about backend infrastructure, allowing developers to focus on code rather than server management.</p>
      
      <h2>Conclusion</h2>
      <p>These trends represent just the beginning of what's possible in web development. As we move forward, staying updated with these technologies will be crucial for building modern, efficient web applications.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Web Development",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Web Development", "AI", "PWA", "WebAssembly", "Serverless"],
  }
}

export function BlogPost({ id }: BlogPostProps) {
  const post = getBlogPost(id)

  return (
    <article className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Header */}
          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button size="sm" variant="outline">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Comment
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author Bio */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg?height=80&width=80" alt={post.author} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="font-semibold text-lg">{post.author}</h3>
                <p className="text-muted-foreground">
                  Senior Developer at Indeset with expertise in modern web technologies and AI integration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
