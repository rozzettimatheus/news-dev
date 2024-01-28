import { fauna } from '@/lib/fauna'
import { stripeClient } from '@/lib/stripe'
import { query as q } from 'faunadb'

type SubscriptionPayload = {
  subscriptionId: string
  customerId: string
  createAction?: boolean
}

export async function saveSubscription({
  subscriptionId,
  customerId,
  createAction = false
}: SubscriptionPayload) {
  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(q.Match(q.Index('reader_by_subscription_id'), customerId))
    )
  ) // referenciar o usuario

  // buscar todos os dados da subscription
  const subscription = await stripeClient.subscriptions.retrieve(subscriptionId)
  const subscriptionData = {
    id: subscription.id,
    user_id: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id
  }

  if (createAction) {
    await fauna.query(
      q.Create(q.Collection('subscriptions'), { data: subscriptionData })
    )
  } else {
    // update ou replace - update atualiza alguns campos / replace - muda tudo
    const subscriptionRef = q.Select(
      'ref',
      q.Get(q.Match(q.Index('subscription_by_id'), subscriptionId))
    )
    await fauna.query(q.Replace(subscriptionRef, { data: subscriptionData }))
  }
}
