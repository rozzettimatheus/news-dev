import { env } from '@/config/env'
import { stripeClient } from '@/lib/stripe'
import { NextApiResponse } from 'next'
import Stripe from 'stripe'
import { saveSubscription } from '../_lib/manage-subscription'

// disable json body parser - using stream
// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

// antigo
// async function read(readable: Readable) {
//   const chunks: Uint8Array[] = []
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
//   }
//   return Buffer.concat(chunks)
// }

export async function POST(req: Request) {
  // stripe - uses Stream Buffers
  const buffer = await req.text()
  const secret = req.headers.get('stripe-signature')
  let event: Stripe.Event
  try {
    event = stripeClient.webhooks.constructEvent(
      buffer,
      String(secret),
      env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.log(err)
    return Response.json(`Webhook error: ${err?.message}`, {
      status: 400
    })
  }
  const relevantEvents = new Set([
    'checkout.session.completed',
    'customer.subscription.created',
    'customer.subscription.updated',
    'customer.subscription.deleted'
  ])
  const type = event.type
  if (relevantEvents.has(type)) {
    try {
      switch (type) {
        // case 'customer.subscription.created': apenas se o usuario for se cadastrar fora do site, caso contrario o checkout.session.completed assegura a criacao
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          const subscription = event.data.object as Stripe.Subscription
          await saveSubscription({
            subscriptionId: subscription.id,
            customerId: subscription.customer.toString()
            // createAction: type === 'customer.subscription.created' // atualizar apenas
          })
          break
        case 'checkout.session.completed':
          const checkoutSession = event.data.object as Stripe.Checkout.Session
          await saveSubscription({
            subscriptionId: checkoutSession.subscription!.toString(),
            customerId: checkoutSession.customer!.toString(),
            createAction: true
          })
          break
        default:
          throw new Error('unhandled error')
      }
    } catch (err) {
      console.log(err)
      // sentry
      return Response.json(`Webhook handler failed: ${err?.message}`, {
        status: 400
      })
    }
  }
  return Response.json({
    received: true
  })
}
