import Stripe from 'stripe'
import appInfo from '@/../package.json'
import { env } from '@/config/env'

export const stripeClient = new Stripe(env.STRIPE_API_KEY, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'news.dev',
    version: appInfo.version
  }
})
