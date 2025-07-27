"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple projects can take 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive support packages including bug fixes, updates, and maintenance. Our support plans range from 3 months to ongoing annual contracts.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "We can integrate with your existing development team, provide consulting services, or work as an extended team to supplement your capabilities.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS. We stay current with the latest technologies to provide the best solutions.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback sessions to ensure high-quality deliverables.",
  },
  {
    question: "Do you sign NDAs and protect intellectual property?",
    answer:
      "Yes, we take intellectual property protection seriously. We're happy to sign NDAs and have strict policies in place to protect your confidential information and code.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with milestone-based payments, with 30% upfront, 40% at key milestones, and 30% upon completion. Payment terms can be customized based on project requirements.",
  },
  {
    question: "Can you help with project planning and requirements gathering?",
    answer:
      "Yes, we offer comprehensive discovery and planning services. Our team will work with you to define requirements, create technical specifications, and develop a detailed project roadmap.",
  },
]

export function ServiceFAQ() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
