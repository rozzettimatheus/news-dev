import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { env } from '@/config/env'

type Params = { slug: string }

export default async function Page({ params }: { params: Params }) {
  const client = createClient({
    accessToken: env.PRISMIC_ACCESS_TOKEN
  })
  const page = await client
    .getByUID('article', params.slug)
    .catch(() => notFound())

  console.log(JSON.stringify(page))

  return <div>Ok</div>
}

export async function generateMetadata({
  params
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient({
    accessToken: env.PRISMIC_ACCESS_TOKEN
  })
  const page = await client
    .getByUID('article', params.slug)
    .catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  }
}

export async function generateStaticParams() {
  const client = createClient({
    accessToken: env.PRISMIC_ACCESS_TOKEN
  })
  const pages = await client.getAllByType('article')

  return pages.map(page => {
    return { slug: page.uid }
  })
}
