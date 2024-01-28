import { z } from 'zod'

const publicEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string()
})

console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
const parsedEnv = publicEnvSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid public environment variables',
    parsedEnv.error.flatten().fieldErrors
  )
  throw new Error('Invalid public environment variables')
}

export const publicEnv = parsedEnv.data
