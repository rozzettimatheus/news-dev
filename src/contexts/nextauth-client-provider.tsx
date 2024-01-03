'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

type ProviderProps = {
  session: Session | null
  children: ReactNode
}

export function NextAuthClientProvider({ children, session }: ProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
