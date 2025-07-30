"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function CareersHero() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/baltit-fort.jpeg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto drop-shadow">
            Be part of a dynamic team that's shaping the future of software development.
            We're looking for passionate individuals who want to make a difference.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
            aria-label="Scroll to job listings"
            onClick={() =>
              document.getElementById("job-listings")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Open Positions
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Optional bouncing scroll indicator */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-10 text-white"
        >
          <ArrowDown className="mx-auto h-6 w-6" />
        </motion.div>
      </div>
    </section>
  )
}
