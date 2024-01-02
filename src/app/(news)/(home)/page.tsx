import { Metadata } from 'next'
import Image from 'next/image'

import { env } from '@/config/env'
import { stripeClient } from '@/lib/stripe'
import { SubscribeButton } from '@/components/subscribe-button'
import { currency } from '@/lib/utils/currency'

export const metadata: Metadata = {
  title: 'Home'
}

type ProductInfo = {
  product: {
    priceId: string
    amount?: string
    recurringInterval?: string
  }
}

async function getPriceInfo(): Promise<ProductInfo> {
  const price = await stripeClient.prices.retrieve(env.PRODUCT_PRICE_ID)
  return {
    product: {
      priceId: price.id,
      amount: price.unit_amount ? currency.format(price.unit_amount / 100) : '',
      recurringInterval: price.recurring?.interval
    }
  }
}

export default async function Home() {
  const { product } = await getPriceInfo()

  return (
    <section className="h-full flex items-center justify-between px-6">
      <div className="md:max-w-[640px] w-full [&>button]:mt-10">
        <h1 className="text-6xl md:text-[5rem] leading-[3.75rem] md:leading-[5rem] font-semibold  tracking-tight">
          Keep <span className="text-cyan-400">focused</span>
        </h1>
        <p className="text-xl md:text-3xl leading-relaxed text-zinc-200 mt-4 md:mt-6">
          Find news, stories and any content immersed in the techs world.
        </p>
        <p className="mt-14 md:mt-20 text-lg md:text-xl font-bold text-center md:text-start">
          Get full access to the publications
          <br />
          <span className="text-cyan-400">
            for {product.amount} / {product.recurringInterval}
          </span>
        </p>
        <SubscribeButton priceId={product.priceId} />
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
