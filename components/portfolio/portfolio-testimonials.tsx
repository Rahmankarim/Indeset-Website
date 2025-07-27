"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    role: "CTO, RetailCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Indeset delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding.",
    rating: 5,
    project: "E-Commerce Platform",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Director, MedTech Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The healthcare management system they built is HIPAA-compliant and has streamlined our operations significantly. Highly recommended!",
    rating: 5,
    project: "Healthcare Management System",
  },
  {
    name: "Michael Chen",
    role: "VP Technology, FinanceFirst Bank",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The mobile banking app is secure, user-friendly, and has received excellent feedback from our customers. Great work by the Indeset team.",
    rating: 5,
    project: "Mobile Banking App",
  },
]

export function PortfolioTestimonials() {
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
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="text-sm text-primary font-medium">Project: {testimonial.project}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
