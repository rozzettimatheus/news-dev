import { query as q } from 'faunadb'
import Github from 'next-auth/providers/github'
import NextAuth, { AuthOptions } from 'next-auth'

import { env } from '@/config/env'
import { fauna } from '@/lib/fauna'

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
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const { email } = user
        const createReaderQuery = q.Create(q.Collection('readers'), {
          data: { email }
        })
        await fauna.query(createReaderQuery)
        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
