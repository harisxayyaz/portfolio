"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Bot, Store, Sparkles, Lock } from "lucide-react";

const projects = [
  {
    title: "Autonomous AI Operations Agent",
    badge: "Client project (under NDA)",
    featured: true,
    description:
      "A production LLM agent that answers natural-language questions over live platform and loan data, deployed on GCP behind an authenticated gateway.",
    highlights: [
      "47 domain skills covering platform operations, reporting and loan data",
      "Access-controlled SQL generation so every query respects tenant and role permissions",
      "Vertex AI RAG knowledge base over federal mortgage underwriting guidelines",
    ],
    technologies: ["Vertex AI", "RAG", "GCP", "PostgreSQL", "Node.js", "TypeScript"],
    liveUrl: null,
    githubUrl: null,
    icon: Sparkles,
    impact:
      "Replaced manual reporting requests with self-serve, permission-aware answers for operations teams.",
  },
  {
    title: "Codebase-AI",
    badge: "RAG Application",
    featured: false,
    description:
      "An AI application for chatting with GitHub repositories using LLMs and retrieval-augmented generation.",
    highlights: [
      "Code parsing and chunking tuned for source files",
      "Embeddings and vector search for semantic retrieval",
      "OpenAI API integration for contextual code explanations",
    ],
    technologies: ["Next.js", "OpenAI API", "RAG", "Vector Search", "TypeScript"],
    liveUrl: "https://codebase-ai.vercel.app/",
    githubUrl: "https://github.com/harisxayyaz/codebase-ai",
    icon: Bot,
    impact:
      "Gives developers instant architecture insight into an unfamiliar repository.",
  },
  {
    title: "Hayaland Store",
    badge: "Production e-commerce",
    featured: false,
    description:
      "A full e-commerce platform built from scratch with pixel-perfect, responsive design, covering product browsing, cart, checkout and interactive 3D product models.",
    highlights: [
      "Three.js product viewer with Redux Toolkit state management",
      "Zod schema validation across API boundaries",
      "Dynamic metadata, sitemaps and robots.txt for SEO and indexing",
    ],
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Redux Toolkit", "Zod"],
    liveUrl: "https://store.hayaland.com/jp",
    githubUrl: null,
    icon: Store,
    impact: "Live storefront serving customers, with improved SEO ranking and engagement.",
  },
  {
    title: "Buyback Platform",
    badge: "Production e-commerce",
    featured: false,
    description:
      "A device buyback platform that lets users sell used devices, with condition assessment, price estimation and a streamlined checkout flow.",
    highlights: [
      "Multi-step condition assessment with live price estimation",
      "Shared design system and validation layer with the main storefront",
    ],
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Zod"],
    liveUrl: "https://buyback.hayaland.com/jp",
    githubUrl: null,
    icon: Store,
    impact: "Streamlined device trade-ins with intuitive UX and accurate pricing.",
  },
  {
    title: "POPULA",
    badge: "Side project",
    featured: false,
    description:
      "A platform for businesses to manage leads and publish content across multiple social platforms, with AI-generated copy and posters.",
    highlights: [
      "Gemini API content and poster generation",
      "Stripe billing and Mailgun transactional email",
    ],
    technologies: ["Next.js", "Gemini API", "Stripe", "Mailgun", "Firebase", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/harisxayyaz/POPULA",
    icon: Layers,
    impact: "Lets small teams scale social presence and track insights in one place.",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Projects
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
            Featured Work
          </h3>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A mix of production systems I shipped for clients and employers, plus
            projects I built on my own. Some client work is under NDA, so it&apos;s
            described without proprietary detail.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col p-6 rounded-xl bg-card border transition-all duration-300 hover:border-primary/50 ${
                  project.featured
                    ? "md:col-span-2 border-primary/30"
                    : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <div className="flex items-center gap-3">
                    {!project.liveUrl && !project.githubUrl && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Lock size={13} />
                        Private
                      </span>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  {project.badge && (
                    <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-muted-foreground bg-secondary rounded-full">
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((highlight) => (
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

                <p className="mt-4 text-xs text-primary/80 italic">
                  {project.impact}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/harisxayyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View more projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
