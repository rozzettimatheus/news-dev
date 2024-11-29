import { api } from '@/lib/api'
import { SubscribeButton } from './subscribe-button'

type ProductInfo = {
  priceId: string
  amount?: string
  recurringInterval?: string
}

export async function Hero() {
  const response = await api('/price', {
    next: {
      revalidate: 60 * 60 // 1h
    }
  })
  const { product } = (await response.json()) as { product: ProductInfo }

  return (
    <>
      <p className="mt-14 md:mt-20 text-lg md:text-xl font-bold text-center md:text-start">
        Get full access to the publications
        <br />
        <span className="text-cyan-500 dark:text-cyan-400">
          for {product.amount} / {product.recurringInterval}
        </span>
      </p>
      <SubscribeButton priceId={product.priceId} />
    </>
  )
}
