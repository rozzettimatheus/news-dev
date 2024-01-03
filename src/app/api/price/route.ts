import { env } from '@/config/env'
import { stripeClient } from '@/lib/stripe'
import { currency } from '@/lib/utils/currency'

export async function GET() {
  const productPrice = await stripeClient.prices.retrieve(env.PRODUCT_PRICE_ID)
  const product = {
    priceId: productPrice.id,
    amount: productPrice.unit_amount
      ? currency.format(productPrice.unit_amount / 100)
      : '',
    recurringInterval: productPrice.recurring?.interval
  }
  return Response.json({ product })
}
