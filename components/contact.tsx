"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // store form reference first
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setIsLoading(true);

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        message,
      },
    ]);

    setIsLoading(false);

    if (!error) {
      setIsSubmitted(true);
      form.reset(); // use stored reference
    } else {
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
            Contact
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h3>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            I&apos;m currently open to new opportunities and would love to hear
            from you. Whether you have a question or just want to say hi,
            I&apos;ll do my best to get back to you!
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-lg font-semibold text-foreground">
                Let&apos;s connect
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:harisayyaz42@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Email
                  </p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    harisayyaz42@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+923171100332"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Phone
                  </p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    +92 317 1100332
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/harisxayyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    LinkedIn
                  </p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    linkedin.com/in/harisxayyaz
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/harisxayyaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    GitHub
                  </p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    github.com/harisxayyaz
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center p-8 rounded-xl bg-card border border-border">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <CheckCircle size={32} />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-foreground">
                  Message Sent!
                </h4>
                <p className="mt-2 text-sm text-muted-foreground text-center">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-xl bg-card border border-border space-y-6"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
