import { NextRequest } from 'next/server'
import { redirectToPreviewURL } from '@prismicio/next'

import { prismicClient } from '../../../lib/prismicio'

export async function GET(request: NextRequest) {
  const client = prismicClient()

  return await redirectToPreviewURL({ client, request })
}
