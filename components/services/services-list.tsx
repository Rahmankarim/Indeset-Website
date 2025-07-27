"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Palette, Cog, Brain, ArrowRight, Check } from "lucide-react"

const services = [
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
    features: [
      "Web Applications",
      "Enterprise Software",
      "API Development",
      "System Integration",
      "Legacy System Modernization",
      "Microservices Architecture",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "AWS"],
    startingPrice: "$15,000",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Flutter",
      "App Store Optimization",
      "Mobile Backend Services",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    startingPrice: "$20,000",
  },
  {
    id: "saas",
    icon: Cloud,
    title: "SaaS Products",
    description: "Scalable Software-as-a-Service platforms with robust architecture and seamless user experience.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "Analytics Dashboard",
      "API Integration",
      "Payment Processing",
      "User Management",
    ],
    technologies: ["Next.js", "Node.js", "Stripe", "AWS", "Docker", "Kubernetes"],
    startingPrice: "$25,000",
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for optimal user engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Brand Identity"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    startingPrice: "$8,000",
  },
  {
    id: "devops",
    icon: Cog,
    title: "DevOps & Cloud",
    description: "Streamlined deployment processes and cloud infrastructure for reliable, scalable applications.",
    features: [
      "CI/CD Pipelines",
      "Cloud Migration",
      "Infrastructure as Code",
      "Monitoring & Analytics",
      "Security Implementation",
      "Performance Optimization",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    startingPrice: "$12,000",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning technologies.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Chatbots & Virtual Assistants",
      "Data Analysis & Insights",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    startingPrice: "$30,000",
  },
]

export function ServicesList() {
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
          <h2 className="text-4xl font-bold mb-4">Comprehensive Software Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a full spectrum of software development services to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              id={service.id}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <CardHeader className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <p className="text-primary font-semibold">Starting from {service.startingPrice}</p>
                      </div>
                    </div>
                    <CardDescription className="text-base mb-6">{service.description}</CardDescription>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center text-sm">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8 bg-muted/30 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Ready to get started?</h4>
                      <p className="text-muted-foreground">
                        Let's discuss your project requirements and create a custom solution that fits your needs.
                      </p>
                      <Button className="w-full">
                        Get Quote for {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
