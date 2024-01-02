import { ReactNode } from 'react'

import { Header } from '@/components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="mx-auto max-w-[1380px] h-hero">{children}</div>
    </main>
  )
}
