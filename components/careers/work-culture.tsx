"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const cultureImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Team collaboration",
    title: "Collaborative Environment",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Modern office space",
    title: "Modern Workspace",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Team meeting",
    title: "Regular Team Meetings",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Office recreation area",
    title: "Recreation Areas",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Team lunch",
    title: "Team Building Events",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Learning session",
    title: "Learning & Development",
  },
]

export function WorkCulture() {
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
          <h2 className="text-4xl font-bold mb-4">Our Work Culture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a workplace that values innovation, collaboration, and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cultureImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    We encourage creative thinking and embrace new technologies to solve complex problems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    We believe in the power of teamwork and open communication across all levels.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    We invest in our people's professional development and career advancement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
