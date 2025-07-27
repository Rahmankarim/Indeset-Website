"use client"

import { motion } from "framer-motion"

const technologies = [
  {
    category: "Frontend",
    techs: [
      { name: "React", logo: "/techStack/react.png?height=60&width=60" },
      { name: "Next.js", logo: "/techStack/next.png?height=60&width=60" },
      { name: "Vue.js", logo: "/techStack/vue.png?height=60&width=60" },
      { name: "TypeScript", logo: "/techStack/ts.png?height=60&width=60" },
      { name: "Bootstrap", logo: "/techStack/bootstrap.png?height=60&width=60" },
      { name: "Tailwind", logo: "/techStack/tailwind.png?height=60&width=60" },
      { name: "JavaScript", logo: "/techStack/js.png?height=60&width=60" },
      { name: "Html", logo: "/techStack/html.png?height=60&width=60" },
      { name: "CSS", logo: "/techStack/css.png?height=60&width=60" },
      { name: "Jquery", logo: "/techStack/jquery.png?height=60&width=60" },


    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", logo: "/techStack/node.png?height=60&width=60" },
      { name: "Python", logo: "/techStack/python.png?height=60&width=60" },
      { name: "Java", logo: "/techStack/java.png?height=60&width=60" }    ],
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", logo: "/techStack/aws.png?height=60&width=60" },
      { name: "Docker", logo: "/techStack/dockers.png?height=60&width=60" },
  
    ],
  },
  {
    category: "Database",
    techs: [
      { name: "PostgreSQL", logo: "/techStack/postgres.png?height=60&width=60" },
      { name: "MongoDB", logo: "/techStack/mongodb.png?height=60&width=60" },
      { name: "mySql", logo: "/techStack/mysql.png?height=60&width=60" },
    ],
  },
]

export function TechStackSection() {
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
          <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies to build robust, scalable, and maintainable solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-center mb-8">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <img src={tech.logo || "/techStack/node.png"} alt={tech.name} className="w-12 h-12 mb-4" />
                    <span className="font-medium text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
