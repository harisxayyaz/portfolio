"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left Column - Photo, Name & Navigation */}
          <div className=" lg:top-32">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-border bg-muted">
                <Image
                  src="/profile.JPG"
                  alt="Muhammad Haris Ayyaz"
                  width={914}
                  height={914}
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Muhammad Haris Ayyaz
              </h1>
              <h2 className="mt-3 text-xl md:text-2xl font-medium text-primary">
                Full Stack Developer
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>
            </motion.div>

            {/* Quick Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 hidden lg:block"
            >
              <ul className="space-y-4">
                {[
                  { name: "ABOUT", href: "#about" },
                  { name: "EXPERIENCE", href: "#experience" },
                  { name: "PROJECTS", href: "#projects" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 text-xs font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex items-center gap-5"
            >
              <a
                href="https://github.com/harisxayyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/harisxayyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:harisayyaz42@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              I&apos;m a Full Stack Developer focused on building clean,
              accessible, and high-performance web applications. I enjoy turning
              complex problems into simple, intuitive, and well-designed
              interfaces, with strong attention to detail, performance, and user
              experience.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              Currently, I&apos;m a Full Stack Developer at{" "}
              <a
                href="https://hayaland.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Hayaland
              </a>
              , where I develop responsive, pixel-perfect user interfaces and
              integrate complex APIs for e-commerce platforms. My primary stack
              includes{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">Next.js</span>, and{" "}
              <span className="font-medium text-foreground">TypeScript</span>,
              and I also work with Three.js to build interactive 3D web
              experiences.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              Previously, I&apos;ve worked on a variety of software projects,
              including AI-powered legal applications and social media
              management platforms, which helped me gain experience across
              different domains and system architectures. I graduated with a BS
              in Computer Science in 2024.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-justify">
              Outside of work, I spend my time learning new technologies,
              building side projects, and exploring ideas that solve real-world
              problems through software.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-20 flex justify-center lg:hidden"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
