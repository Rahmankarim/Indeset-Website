"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, GraduationCap, Plane, Home, Coffee, Shield, DollarSign, Clock, Gamepad2, Users } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Annual learning budget for courses, conferences, and professional development",
  },
  {
    icon: Plane,
    title: "Flexible PTO",
    description: "Unlimited paid time off policy to maintain work-life balance",
  },
  {
    icon: Home,
    title: "Remote Work",
    description: "Flexible remote work options with home office setup allowance",
  },
  {
    icon: Coffee,
    title: "Office Perks",
    description: "Free meals, snacks, and beverages in our modern office spaces",
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Company-paid life and disability insurance coverage",
  },
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market-competitive salaries with annual performance reviews",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Flexible working hours to accommodate your lifestyle",
  },
  {
    icon: Gamepad2,
    title: "Recreation",
    description: "Game rooms, team events, and recreational activities",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Regular team outings, hackathons, and company retreats",
  },
]

export function CompanyBenefits() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in taking care of our team members with comprehensive benefits and a supportive work environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
