import { ImageResponse } from 'next/og'

export const alt = 'Muhammad Haris Ayyaz, Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#101214',
          color: '#f2f3f5',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#4fd1c5',
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Muhammad Haris Ayyaz
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.4,
            color: '#a1a7ad',
            maxWidth: 900,
          }}
        >
          Interfaces, APIs, backend services, real-time systems and AI
          integrations. Built with Next.js, Node.js, PostgreSQL and Redis.
        </div>
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 56,
            fontSize: 24,
            color: '#a1a7ad',
          }}
        >
          {['TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Redis', 'AI/RAG'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  border: '1px solid #2b2f34',
                  borderRadius: 999,
                  padding: '10px 22px',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    size
  )
}
