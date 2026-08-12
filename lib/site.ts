// Single source of truth for site-wide values used by metadata, robots and sitemap.
// Falls back to the current Vercel domain. When a custom domain is set up, point
// NEXT_PUBLIC_SITE_URL at it in the deployment env (it is inlined at build time,
// so a redeploy is required for a change to take effect).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisayyaz.vercel.app"

export const SITE_NAME = "Muhammad Haris Ayyaz"

export const SITE_TITLE = "Muhammad Haris Ayyaz | Full Stack Developer"

export const SITE_DESCRIPTION =
  "Full Stack Developer with 2+ years of experience building production web applications with Next.js, React, TypeScript, Node.js and PostgreSQL. React interfaces, APIs, backend services, third-party integrations and real-time systems, shipped to production."
