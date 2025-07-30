"use client"

import { motion } from "framer-motion"

export function PortfolioHero() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Our Portfolio
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative solutions we've built for clients across various industries. Each project represents
            our commitment to excellence and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
