"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Bot, Store } from "lucide-react";

const projects = [
  {
    title: "Hayaland Store",
    description:
      "A full-featured e-commerce platform built from scratch with pixel-perfect, responsive design. Features include product browsing, cart management, checkout flow, and interactive 3D product models.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zod",
    ],
    liveUrl: "https://store.hayaland.com/jp",
    githubUrl: null,
    icon: Store,
    impact:
      "Improved SEO ranking and user engagement with dynamic metadata and optimized performance.",
  },
  {
    title: "POPULA",
    description:
      "A comprehensive platform for businesses to manage leads and publish content across multiple social platforms. Features AI-based content and poster generation using Gemini API.",
    technologies: [
      "Next.js",
      "Gemini API",
      "Stripe",
      "Mailgun",
      "Firebase",
      "Tailwind CSS",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/harisxayyaz/POPULA",
    icon: Layers,
    impact:
      "Enabled businesses to scale their social media presence and track insights effectively.",
  },
  {
    title: "Codebase-AI",
    description:
      "A full-stack RAG application that allows users to upload GitHub repositories and chat with the codebase using LLMs. Implements embeddings and vector search for contextual code explanations.",
    technologies: [
      "Next.js",
      "OpenAI API",
      "RAG",
      "Vector DB",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://codebase-ai.vercel.app/",
    githubUrl: "https://github.com/harisxayyaz/codebase-ai",
    icon: Bot,
    impact:
      "Provides developers with instant code understanding and architecture insights.",
  },
  {
    title: "Buyback Platform",
    description:
      "A device buyback platform enabling users to sell their used devices. Features include device condition assessment, price estimation, and seamless checkout process.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Zod",
    ],
    liveUrl: "https://buyback.hayaland.com/jp",
    githubUrl: null,
    icon: Store,
    impact:
      "Streamlined the device trade-in process with intuitive UX and accurate pricing.",
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
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <div className="flex items-center gap-3">
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

                <h4 className="mt-4 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-primary/80 italic">
                  {project.impact}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
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
