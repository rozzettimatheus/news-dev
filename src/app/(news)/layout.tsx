import { ReactNode } from 'react'

import { Header } from '@/layouts/header'

export default function NewsDevLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <main className="min-h-hero flex flex-col">{children}</main>
    </div>
  )
}
