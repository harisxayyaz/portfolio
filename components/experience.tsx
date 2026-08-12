"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Download } from "lucide-react"

const experiences = [
  {
    date: "SINCE MAY 2026",
    title: "Full Stack Engineer",
    company: "CCRIPT Agency",
    companyUrl: null,
    location: "Remote",
    summary:
      "Full stack engineering on a large multi-tenant mortgage-tech platform, owning features from the React interface down to the database.",
    highlights: [
      "Built scalable backend services with Node.js, Express, PostgreSQL, Prisma and Redis across 400+ data models, 200+ API modules and 150+ domain services.",
      "Built the Next.js and React interfaces on top of those services in TypeScript, including the pipeline dashboards and the live messaging inbox.",
      "Designed and shipped a loan pipeline engine with JSON Logic work queues, SLA tracking, role-based defaults and urgency-based prioritization.",
      "Built a unified real-time messaging platform for SMS, voice, email and social DMs using Socket.IO and Redis Pub/Sub, supporting horizontally scaled instances.",
      "Engineered multi-tenant communications and financial integrations: transactional email, OAuth/SMTP/ESP providers, credit & income verification, e-signatures, valuations, MISMO/FNM parsers and OCR.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Socket.IO",
    ],
  },
  {
    date: "SEP 2024 TO APR 2026",
    title: "Full Stack Engineer",
    company: "Hayaland",
    companyUrl: "https://hayaland.com",
    location: "Remote",
    summary:
      "Owned two customer-facing e-commerce products end to end, from first commit to production.",
    highlights: [
      "Built store.hayaland.com and buyback.hayaland.com from scratch with responsive, pixel-perfect UIs.",
      "Integrated multiple third-party APIs and enforced end-to-end schema validation with Zod.",
      "Built interactive 3D product experiences with Three.js and managed application state with Redux Toolkit.",
      "Improved SEO, indexing and production reliability through dynamic metadata, sitemaps, deployment and monitoring.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zod",
      "Shadcn/ui",
    ],
  },
  {
    date: "JUN TO SEP 2024",
    title: "Full Stack Development Intern",
    company: "DevHawks",
    companyUrl: null,
    location: "On-site",
    summary:
      "Contributed to LawLens AI, an AI-assisted legal research web application.",
    highlights: [
      "Developed frontend features and secure backend REST APIs with Node.js and Express.",
      "Built responsive UI with Next.js and Tailwind CSS, with optimized data flow between client and server.",
    ],
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
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Experience
            </h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
              Where I&apos;ve Worked
            </h3>
          </div>
          <a
            href="/Muhammad-Haris-Ayyaz-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Download size={15} />
            Full resume (PDF)
          </a>
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
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      {exp.company}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
                <p className="mt-4 text-sm text-foreground/90 leading-relaxed">
                  {exp.summary}
                </p>
                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
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
                  B.S. Computer Science · CGPA 3.14
                </p>
              </div>
              <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                2021 TO 2024
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
