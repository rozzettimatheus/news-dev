import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    template: '%s | news.dev',
    default: 'news.dev'
  },
  description: 'Daily news for developers'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lato.className}>
      <body className="bg-zinc-950 text-zinc-50">{children}</body>
    </html>
  )
}
