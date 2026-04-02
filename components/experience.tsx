"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    date: "2024 — PRESENT",
    title: "Full Stack Developer",
    company: "Hayaland",
    companyUrl: "https://hayaland.com",
    location: "Remote",
    description:
      "Built store.hayaland.com & buyback.hayaland.com from scratch with fully responsive, pixel-perfect UIs. Integrated multiple APIs and implemented schema validation using Zod. Managed complex state using Redux Toolkit and integrated interactive 3D models using Three.js. Improved SEO and indexing through dynamic metadata, sitemap, and robots.txt implementation.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Redux Toolkit", "Zod", "Shadcn/ui"],
  },
  {
    date: "JUN — SEP 2024",
    title: "Full Stack Development Intern",
    company: "DevHawks",
    companyUrl: "#",
    location: "On-site",
    description:
      "Contributed to development of LawLens AI, an AI-based legal web application. Developed frontend features and secure backend REST APIs. Built responsive UI using Next.js and Tailwind CSS. Ensured smooth data flow between client and server with optimized API handling.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Experience
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
            Where I&apos;ve Worked
          </h3>
        </motion.div>

        <div className="mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative grid md:grid-cols-[200px_1fr] gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
            >
              <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {exp.date}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title} ·{" "}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {exp.company}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-foreground">Education</h3>
          <div className="mt-6 p-6 rounded-xl bg-card border border-border  hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  COMSATS University Islamabad
                </h4>
                <p className="text-sm text-muted-foreground">
                  B.S. Computer Science — CGPA: 3.14
                </p>
              </div>
              <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                JAN 2021 — DEC 2024
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
