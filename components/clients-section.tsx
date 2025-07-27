"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Samsung", logo: "/samsung.webp?height=60&width=120" },
  { name: "inDrive", logo: "/indrive.png?height=60&width=120" },
  { name: "Organics", logo: "/organics.jpeg?height=60&width=120" },
  { name: "Pearson", logo: "/pearson.png?height=60&width=120" },
  { name: "AI Solutions", logo: "/devsinc.png?height=60&width=120" },
  { name: "DevOps Pro", logo: "/intel.png?height=60&width=120" },
]

export function ClientsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-muted-foreground mb-4">Trusted by Leading Companies</h2>
          <p className="text-lg text-muted-foreground">
            We've helped over 100+ companies transform their digital presence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center p-4 rounded-lg hover:bg-background transition-colors"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="h-20 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
