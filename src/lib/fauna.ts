import { Client } from 'faunadb'

import { env } from '@/config/env'

export const fauna = new Client({
  secret: env.FAUNADB_SECRET_KEY
})
