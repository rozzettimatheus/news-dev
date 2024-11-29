import { Suspense } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'

import { Hero } from '@/components/hero'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <section className="mx-auto max-w-[1380px] flex-1 flex items-center justify-between px-4 lg:px-6">
      <div className="md:max-w-[640px] w-full [&>button]:mt-10">
        <h1 className="text-6xl md:text-[5rem] leading-[3.75rem] md:leading-[5rem] font-semibold  tracking-tight">
          Keep <span className="text-cyan-500 dark:text-cyan-400">focused</span>
        </h1>
        <p className="text-xl md:text-3xl leading-relaxed text-slate-600 dark:text-zinc-200 mt-4 md:mt-6">
          Find news, stories and any content immersed in the techs world.
        </p>
        <Suspense
          fallback={
            <p className="mt-14 md:mt-20 text-lg md:text-xl font-bold text-center md:text-start">
              Get full access to the publications
              <br />
              <div className="animate-pulse w-24 bg-zinc-400 h-4" />
            </p>
          }
        >
          <Hero />
        </Suspense>
      </div>
      <Image
        src="/lady.svg"
        className="hidden md:block h-[520px] lg:h-[600px] w-[340px] lg:w-[400px]"
        height={520}
        width={340}
        alt="Girl coding"
      />
    </section>
  )
}
