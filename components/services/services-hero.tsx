"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section
      className="relative py-20 bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/baltit-fort.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end software development services that drive business growth
            and digital transformation.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact" aria-label="Get started with our services">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
