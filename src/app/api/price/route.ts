import { env } from '@/config/env'
import { stripeClient } from '@/lib/stripe'
import { currencyUtils } from '@/lib/utils/currency'

export async function GET() {
  try {
    const productPrice = await stripeClient.prices.retrieve(
      env.PRODUCT_PRICE_ID
    )
    const product = {
      priceId: productPrice.id,
      amount: productPrice.unit_amount
        ? currencyUtils.format(productPrice.unit_amount / 100)
        : '',
      recurringInterval: productPrice.recurring?.interval
    }
    return Response.json({ product })
  } catch (err) {
    console.error('[GET] Get Price Error:', err)
    Response.json(
      {
        message: 'Could not be able to retrieve Stripe information'
      },
      {
        status: 500
      }
    )
  }
}
