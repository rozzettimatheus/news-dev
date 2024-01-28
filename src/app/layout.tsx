import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { getServerSession } from 'next-auth'

import { NextAuthClientProvider } from '@/contexts/nextauth-client-provider'
import { authOptions } from './api/auth/[...nextauth]/auth-options'

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

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" className={lato.className}>
      <body className="bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50">
        <NextAuthClientProvider session={session}>
          {children}
        </NextAuthClientProvider>
      </body>
    </html>
  )
}
