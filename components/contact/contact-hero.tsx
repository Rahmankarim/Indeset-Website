"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build Something Amazing Together</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss how we can help you
            achieve your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
