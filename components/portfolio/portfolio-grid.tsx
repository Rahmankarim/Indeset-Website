"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web Application",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    client: "RetailCorp",
    duration: "4 months",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description:
      "HIPAA-compliant healthcare platform for patient management, appointment scheduling, and telemedicine.",
    image: "/placeholder.svg?height=300&width=500",
    category: "SaaS Platform",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Docker"],
    client: "MedTech Solutions",
    duration: "6 months",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transaction processing.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    client: "FinanceFirst Bank",
    duration: "5 months",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    description: "Machine learning-powered analytics platform for business intelligence and predictive insights.",
    image: "/placeholder.svg?height=300&width=500",
    category: "AI/ML Solution",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "AWS"],
    client: "DataInsights Inc",
    duration: "3 months",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Comprehensive real estate platform with property listings, virtual tours, and CRM integration.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web Application",
    technologies: ["Vue.js", "Laravel", "MySQL", "Cloudinary"],
    client: "PropertyPro",
    duration: "4 months",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform with course management, video streaming, and progress tracking capabilities.",
    image: "/placeholder.svg?height=300&width=500",
    category: "EdTech Platform",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS S3", "Stripe"],
    client: "EduTech Academy",
    duration: "5 months",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

const categories = ["All", "Web Application", "Mobile App", "SaaS Platform", "AI/ML Solution", "EdTech Platform"]

export function PortfolioGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent work and see how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm" className="mb-2 bg-transparent">
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-1">Client: {project.client}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg">View All Projects</Button>
        </motion.div>
      </div>
    </section>
  )
}
