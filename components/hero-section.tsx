"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Code, Users, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse dark:bg-blue-600"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000 dark:bg-purple-600"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000 dark:bg-pink-600"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium"
            >
              <Zap className="w-4 h-4 mr-2" />
              #1 Software Development Company
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-gray-900 dark:text-white">Boundaries </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                are set to inspire
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
            >
             Indeset is a software company that sets innovation in motion. We empower individuals and businesses to achieve their goals by providing cutting-edge solutions, expertise, and support.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">5+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-8"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by industry leaders</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">TechCorp</span>
                </div>
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">InnovateLab</span>
                </div>
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">DataFlow</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-20 blur-3xl"></div>

              {/* Main Image */}
              <div className="relative  rounded-2xl  overflow-hidden">
                <img
                  src="/kalshi-girl.png?height=500&width=500"
                  alt="Software Development Team"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Cards */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Clean Code</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Expert Team</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {/* <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-8 right-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs opacity-90">Success Rate</div>
              </motion.div> */}

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 left-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs opacity-90">Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
