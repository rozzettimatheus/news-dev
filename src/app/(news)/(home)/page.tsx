import { SubscribeButton } from '@/components/subscribe-button'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <section className="h-hero flex items-center justify-between px-6">
      <div className="max-w-[640px] w-full [&>button]:mt-10">
        <h1 className="text-[5rem] font-semibold leading-[5rem] tracking-tight">
          Keep <span className="text-cyan-400">focused</span>
        </h1>
        <p className="text-3xl leading-relaxed text-zinc-200 mt-6">
          Find news, stories and any content immersed in the techs world.
        </p>
        <p className="mt-20 text-xl font-bold">
          Get full access to the publications
          <br />
          <span className="text-cyan-400">for $9.90</span>
        </p>
        <SubscribeButton />
      </div>
      <Image src="/lady.svg" height={520} width={340} alt="Girl coding" />
    </section>
  )
}
