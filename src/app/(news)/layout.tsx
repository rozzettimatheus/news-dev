import { ReactNode } from 'react'

import { Header } from '@/components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1380px] px-8 pb-12">
      <Header />
      {children}
    </main>
  )
}
