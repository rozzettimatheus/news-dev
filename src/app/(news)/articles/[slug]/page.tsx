import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PrismicRichText } from '@prismicio/react'

import { getArticleBySlug } from '@/lib/prismicio'

type Params = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Params) {
  const {
    data: { thumbnail, content, title }
  } = await getArticleBySlug(params.slug).catch(() => notFound())
  return (
    <section className="w-full">
      <div
        style={{ backgroundImage: `url(${thumbnail.url})` }}
        className="w-full h-96 bg-cover bg-no-repeat bg-fixed bg-bottom"
      />
      <div className="prose dark:prose-invert prose-md md:prose-lg prose-zinc prose-pre:text-amber-600 mt-12 px-6 max-w-screen-lg mx-auto p-5">
        <h1 className="text-start text-5xl md:text-6xl leading-snug mb-8">
          {title}
        </h1>
        <PrismicRichText field={content} />
      </div>
    </section>
  )
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { data } = await getArticleBySlug(params.slug).catch(() => notFound())
  const { meta_title: title, meta_description: description } = data
  return {
    title,
    description
  }
}
