"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function CareersHero() {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of software development. We're looking for passionate
            individuals who want to make a difference.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
            onClick={() => document.getElementById("job-listings")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Open Positions
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
