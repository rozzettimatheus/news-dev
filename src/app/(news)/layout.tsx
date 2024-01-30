import { ReactNode } from 'react'

import { Header } from '@/layouts/header'

export default function NewsDevLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <div className="mx-auto max-w-[1380px] px-4 min-h-hero flex flex-col">
        {children}
      </div>
    </main>
  )
}
