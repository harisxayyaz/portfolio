import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Page not found | Muhammad Haris Ayyaz",
  description: "This page does not exist.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        <p className="font-mono text-6xl md:text-7xl font-bold text-primary">
          404
        </p>
        <h1 className="mt-6 text-2xl md:text-3xl font-bold text-foreground">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The page you&apos;re looking for was moved or never existed. Everything
          worth seeing is on the home page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <a
            href="mailto:harisayyaz42@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Email me
          </a>
        </div>
      </div>
    </main>
  )
}
