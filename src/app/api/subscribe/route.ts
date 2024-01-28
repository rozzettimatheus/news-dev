import { stripeClient } from '@/lib/stripe'
import { env } from '@/config/env'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/auth-options'
import { publicEnv } from '@/config/public-env'
import { query as q } from 'faunadb'
import { fauna } from '@/lib/fauna'

type User = {
  ref: {
    id: string
  }
  data: {
    subscription_id: string
  }
}

/**
 * TODO - after deploy, configure webhook endpoint with URL
 */
export async function POST() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return Response.error()
  }

  // cookie config same-site (available client - server)
  const user = await fauna.query<User>(
    q.Get(q.Match(q.Index('reader_by_email'), q.Casefold(session.user.email!)))
  )
  let customerId = user.data.subscription_id
  if (!customerId) {
    const stripeCustomer = await stripeClient.customers.create({
      email: session?.user?.email!
    })
    await fauna.query(
      q.Update(q.Ref(q.Collection('readers'), user.ref.id), {
        data: {
          subscription_id: stripeCustomer.id
        }
      })
    )
    customerId = stripeCustomer.id
  }
  const { id: stripeSessionId } = await stripeClient.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [
      {
        price: env.PRODUCT_PRICE_ID,
        quantity: 1
      }
    ],
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: publicEnv.NEXT_PUBLIC_API_BASE_URL + '/articles',
    cancel_url: publicEnv.NEXT_PUBLIC_API_BASE_URL
  })
  return Response.json(
    {
      sessionId: stripeSessionId
    },
    {
      status: 200
    }
  )
}
