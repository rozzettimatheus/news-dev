import { z } from 'zod'

const envSchema = z.object({
  AUTH_SECRET: z.string().uuid(),
  STRIPE_API_KEY: z.string(),
  STRIPE_WEBHOOK_SECRET: z.string(),
  PRODUCT_PRICE_ID: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  FAUNADB_SECRET_KEY: z.string()
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors
  )
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
