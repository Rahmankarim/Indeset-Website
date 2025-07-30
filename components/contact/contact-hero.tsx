"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
  <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/baltit-fort.jpeg')" }}
    >      {/* Optional: Gradient overlay for depth */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto drop-shadow">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss how we can help
            you achieve your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
