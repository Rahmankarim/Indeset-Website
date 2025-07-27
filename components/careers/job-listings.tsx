"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    experience: "5+ years",
    description:
      "We're looking for a senior full stack developer to join our engineering team and help build scalable web applications.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Strong knowledge of TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Familiarity with microservices architecture",
      "Excellent problem-solving skills",
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Participate in code reviews",
      "Contribute to technical architecture decisions",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    experience: "3+ years",
    description:
      "Join our design team to create beautiful and intuitive user experiences for our clients' applications.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of design systems",
      "Knowledge of front-end technologies (HTML/CSS)",
    ],
    responsibilities: [
      "Create wireframes and prototypes",
      "Design user interfaces for web and mobile",
      "Conduct user research and testing",
      "Collaborate with developers and product managers",
      "Maintain design systems and guidelines",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    experience: "4+ years",
    description: "Help us build and maintain robust infrastructure and deployment pipelines for our applications.",
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of AWS/GCP",
      "Experience with Docker and Kubernetes",
      "Proficiency in Infrastructure as Code (Terraform)",
      "Knowledge of CI/CD pipelines",
    ],
    responsibilities: [
      "Design and maintain cloud infrastructure",
      "Implement CI/CD pipelines",
      "Monitor application performance",
      "Ensure security best practices",
      "Automate deployment processes",
    ],
  },
  {
    id: 4,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    experience: "3+ years",
    description:
      "Develop high-quality mobile applications for iOS and Android platforms using React Native or Flutter.",
    requirements: [
      "3+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Knowledge of native iOS/Android development",
      "Experience with mobile app deployment",
      "Understanding of mobile UI/UX principles",
    ],
    responsibilities: [
      "Develop mobile applications",
      "Optimize app performance",
      "Implement new features",
      "Debug and fix issues",
      "Collaborate with design and backend teams",
    ],
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    experience: "4+ years",
    description: "Lead project delivery and ensure successful outcomes for our client engagements.",
    requirements: [
      "4+ years of project management experience",
      "PMP or Agile certification preferred",
      "Experience with software development projects",
      "Strong communication and leadership skills",
      "Proficiency in project management tools",
    ],
    responsibilities: [
      "Manage project timelines and deliverables",
      "Coordinate with clients and internal teams",
      "Identify and mitigate project risks",
      "Ensure quality standards are met",
      "Report on project progress",
    ],
  },
  {
    id: 6,
    title: "Junior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    experience: "1-2 years",
    description:
      "Start your career with us as a junior frontend developer and grow your skills in a supportive environment.",
    requirements: [
      "1-2 years of frontend development experience",
      "Knowledge of React and JavaScript",
      "Understanding of HTML/CSS",
      "Familiarity with version control (Git)",
      "Eagerness to learn and grow",
    ],
    responsibilities: [
      "Develop user interfaces",
      "Implement responsive designs",
      "Write clean, maintainable code",
      "Participate in code reviews",
      "Learn from senior team members",
    ],
  },
]

export function JobListings() {
  return (
    <section id="job-listings" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exciting opportunities to grow your career with us
          </p>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.experience}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
