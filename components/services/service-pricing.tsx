"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$5,000",
    period: "one-time",
    description: "Perfect for small projects and MVPs",
    features: [
      "Basic web application",
      "Responsive design",
      "Basic functionality",
      "3 months support",
      "Source code delivery",
      "Documentation",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$15,000",
    period: "one-time",
    description: "Ideal for growing businesses",
    features: [
      "Advanced web application",
      "Custom UI/UX design",
      "Database integration",
      "API development",
      "6 months support",
      "Performance optimization",
      "Security implementation",
      "Testing & QA",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "For large-scale applications",
    features: [
      "Complex enterprise solution",
      "Scalable architecture",
      "Advanced integrations",
      "Custom features",
      "12 months support",
      "DevOps setup",
      "Training & documentation",
      "Dedicated project manager",
    ],
    popular: false,
  },
]

export function ServicePricing() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the package that best fits your project needs. All prices are starting points and can be customized.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period !== "quote" && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full ${plan.popular ? "bg-primary" : ""}`}>
                    {plan.price === "Custom" ? "Get Quote" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need something different? We offer custom solutions tailored to your specific requirements.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
