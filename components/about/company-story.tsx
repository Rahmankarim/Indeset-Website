"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through innovative software solutions.",
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Delivered our first enterprise-level solution, establishing our reputation in the market.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 25+ talented professionals across different specializations.",
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Launched our AI and machine learning practice, helping clients leverage cutting-edge technology.",
  },
  {
    year: "2023",
    title: "100+ Projects",
    description: "Reached the milestone of 100+ successful project deliveries across various industries.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded our services globally, serving clients across North America, Europe, and Asia.",
  },
]

export function CompanyStory() {
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
          <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a small startup to a leading software development company, here's how we've grown and evolved over the
            years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <Card className={`max-w-md ${index % 2 === 0 ? "ml-auto mr-8" : "mr-auto ml-8"}`}>
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
