"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Target, Award, Coffee } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in every project we deliver.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and creative solutions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every aspect of our work.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on the quality of our deliverables.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "We believe in maintaining a healthy balance between work and life.",
  },
]

export function CompanyCulture() {
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
          <h2 className="text-4xl font-bold mb-4">Our Values & Culture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our company culture is built on strong values that guide everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Office Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Our Workspace</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/interior/interior1.jpg?height=300&width=400"
              alt="Office Space"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="/interior/interior2.webp?height=300&width=400"
              alt="Collaboration Room"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="/interior/interior3.jpg?height=300&width=400"
              alt="Office Lounge"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
