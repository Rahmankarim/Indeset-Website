"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI & Machine Learning",
  "DevOps",
  "UI/UX Design",
  "Industry Insights",
  "Tutorials",
  "Case Studies",
]

export function BlogCategories() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Button variant={index === 0 ? "default" : "outline"} size="sm" className="mb-2">
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
