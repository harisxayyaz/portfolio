"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  {
    value: "2+",
    label: "Years building production apps",
  },
  {
    value: "400+",
    label: "Data models across the platform",
  },
  {
    value: "200+",
    label: "API modules shipped",
  },
  {
    value: "150+",
    label: "Domain services owned",
  },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="px-6 pb-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border border-border bg-border">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card p-6"
            >
              <p className="font-mono text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
