"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Monitor, Server, Radio, Bot } from "lucide-react"

const focusAreas = [
  {
    icon: Monitor,
    title: "Frontend & Product UI",
    description:
      "React and Next.js interfaces in TypeScript, built with Tailwind and Shadcn/ui. Responsive, pixel-perfect screens backed by Redux Toolkit state and Zod validation.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Node.js and Express services on PostgreSQL with Prisma. REST APIs, domain services, role-based access and third-party integrations built to run in production.",
  },
  {
    icon: Radio,
    title: "Real-Time Systems",
    description:
      "Socket.IO and Redis Pub/Sub messaging that stays consistent across horizontally scaled instances, from the server layer up to the live inbox UI.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "LLM agents, RAG pipelines and vector search with the OpenAI API and Vertex AI, including access-controlled SQL generation over live production data.",
  },
]

const technologies = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "Tailwind CSS", "Shadcn/ui", "Redux Toolkit", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Prisma", "Socket.IO", "Zod"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    category: "AI & Integrations",
    items: ["OpenAI API", "Vertex AI", "RAG", "Gemini API", "Vector Search"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "GCP", "Vercel", "Render", "Git/GitHub", "CI/CD"],
  },
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
            What I Bring to a Team
          </h3>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            I own features across the whole stack, from the React interface a
            user clicks through to the data model, API and integrations behind
            it, and I stay with them through deployment and production.
          </p>
        </motion.div>

        {/* Focus areas */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-foreground">
                  {area.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Tech stack */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-2xl md:text-3xl font-bold text-foreground"
        >
          Technologies I Work With
        </motion.h3>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
