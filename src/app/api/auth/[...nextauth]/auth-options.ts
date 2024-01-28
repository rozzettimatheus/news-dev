import { AuthOptions } from "next-auth"
import Github from "next-auth/providers/github"

import { query as q } from "faunadb"
import { fauna } from "@/lib/fauna"
import { env } from "@/config/env"

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
    async signIn({ user }) {
      try {
        const { email } = user
        const createReaderQuery = q.Create(q.Collection('readers'), {
          data: { email }
        })
        // always by index
        const matchReaderQuery = 
          q.Match(
            q.Index('reader_by_email'),
            q.Casefold(user.email!)
          )
        
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                matchReaderQuery
              )
            ),
            createReaderQuery,
            q.Get(
              matchReaderQuery
            )
          )
        )
        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }
  }
}