"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const technologies = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "Java"] },
  { category: "Frontend", items: ["Next.js", "React.js", "Tailwind CSS", "Shadcn/ui", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Flask", "REST APIs"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase"] },
  { category: "Tools", items: ["Git", "AWS S3", "Vercel", "Redux Toolkit", "Zod", "Stripe"] },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            About
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
            Technologies I Work With
          </h3>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <h4 className="text-sm font-medium tracking-wider text-primary uppercase">
                {tech.category}
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 text-sm text-muted-foreground bg-secondary rounded-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
