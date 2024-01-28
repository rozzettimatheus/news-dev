'use client'

import { api } from '@/lib/api'
import { getStripeJs } from '@/lib/stripe-js'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'

type SubscribeButtonProps = {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const session = useSession()
  const [loading, setLoading] = useState(false)

  async function handleSubscribe() {
    if (session.status === 'unauthenticated') {
      signIn('github')
      return
    }

    setLoading(true)
    // create checkout session
    try {
      const response = await api('/subscribe', {
        method: 'POST'
      })
      const data = await response.json()
      const { sessionId } = data as { sessionId: string }
      const stripe = await getStripeJs()
      await stripe?.redirectToCheckout({
        sessionId
      })
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className="w-full md:w-[260px] h-14 md:h-16 rounded-full outline-none bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200  text-zinc-900 text-xl font-bold"
    >
      Subscribe now
      {loading && <div>loading...</div>}
    </button>
  )
}
