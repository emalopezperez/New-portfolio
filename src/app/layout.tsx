import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/shared/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Emanuel Lopez',
    default: 'Emanuel Lopez - Software developer',
  },
  description:
    '¡Hola! Soy Emanuel López, Software developer con experiencia en proyectos personales y trabajos freelance en JavaScript, React, Next.js , Node, Express, Mongo DB.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <main className="flex w-full">
            <Layout>{children}</Layout>
          </main>
        </Providers>
      </body>
    </html>
  )
}
