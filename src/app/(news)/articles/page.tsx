import { ArticleCard } from '@/components/article'
import { getArticles } from '@/lib/prismicio'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Articles'
}

export default async function Articles() {
  const response = await getArticles({
    page: 1,
    pageSize: 10
  }).catch(() => notFound())

  return (
    <section className="py-12 mx-auto max-w-[1380px] px-4 md:px-6">
      <div className="grid grid-cols-article-v md:grid-cols-article-h gap-y-10 gap-x-8">
        {response.results?.map((article, idx) => (
          <ArticleCard
            key={article.uid}
            type={idx === 0 ? 'main' : 'default'}
            title={String(article.data.title)}
            updatedAt={new Date(article.last_publication_date)}
            thumbnail={article.data.thumbnail}
            excerpt=""
            tags={article.tags}
            author={article.data.author}
          />
        ))}
      </div>
    </section>
  )
}

export async function generateStaticParams() {
  const { results: articles } = await getArticles({ page: 1, pageSize: 10 })

  return articles.map(page => {
    return { slug: page.uid }
  })
}
