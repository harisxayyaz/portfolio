import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/site'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'Full Stack Developer',
    'Full Stack Engineer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Node.js Developer',
    'React',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'Redis',
    'Socket.IO',
    'REST APIs',
    'RAG',
    'Vertex AI',
    'OpenAI API',
    'Remote Developer',
    'Pakistan',
  ],
  authors: [{ name: 'Muhammad Haris Ayyaz', url: SITE_URL }],
  creator: 'Muhammad Haris Ayyaz',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// Structured data so recruiters and search engines can parse the profile.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  jobTitle: 'Full Stack Developer',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: 'mailto:harisayyaz42@gmail.com',
  telephone: '+923171100332',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://github.com/harisxayyaz',
    'https://linkedin.com/in/harisxayyaz',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'COMSATS University Islamabad',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'CCRIPT Agency',
  },
  knowsAbout: [
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'React',
    'Next.js',
    'PostgreSQL',
    'Prisma',
    'Redis',
    'Socket.IO',
    'REST APIs',
    'Retrieval-Augmented Generation',
    'Vertex AI',
    'OpenAI API',
    'Google Cloud Platform',
    'AWS',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
