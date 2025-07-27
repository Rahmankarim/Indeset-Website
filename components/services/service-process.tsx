"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Code2, Rocket, Users, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business goals, requirements, and challenges through detailed consultation.",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team creates a comprehensive project roadmap with timelines, milestones, and technical specifications.",
    duration: "1 week",
  },
  {
    icon: Code2,
    title: "Development & Testing",
    description: "We build your solution using agile methodology with regular updates and continuous testing.",
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "We deploy your solution to production with proper monitoring and performance optimization.",
    duration: "1 week",
  },
  {
    icon: Users,
    title: "Training & Handover",
    description: "We provide comprehensive training and documentation to ensure smooth adoption.",
    duration: "1 week",
  },
  {
    icon: CheckCircle,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your solution running smoothly.",
    duration: "Ongoing",
  },
]

export function ServiceProcess() {
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
          <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful project delivery from concept to completion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 relative">
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mt-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="text-sm text-primary font-medium">Duration: {step.duration}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
