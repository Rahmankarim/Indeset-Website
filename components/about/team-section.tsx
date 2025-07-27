"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Github, Twitter } from "lucide-react"

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader with 10+ years in software development and business strategy.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technical expert specializing in scalable architecture and emerging technologies.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative director with expertise in user experience and interface design.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer passionate about clean code and innovative solutions.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Infrastructure specialist focused on automation and cloud technologies.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Agile expert ensuring smooth project delivery and client satisfaction.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience and passion for innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </a>
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
