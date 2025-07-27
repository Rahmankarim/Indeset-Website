"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/baltit-fort.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Indeset</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We are a passionate team of software engineers, designers, and innovators dedicated to creating exceptional
            digital experiences that drive business success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
