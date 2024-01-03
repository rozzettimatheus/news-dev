import NextAuth, { AuthOptions } from 'next-auth'
import Github from 'next-auth/providers/github'

import { env } from '@/config/env'

export const authOptions: AuthOptions = {
  secret: env.AUTH_SECRET,
  providers: [
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
