import { ArticleCard } from '@/components/article-card'
import { MainArticleCard } from '@/components/article-card-main'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles'
}

export default function Articles() {
  const data = {
    tags: ['React', 'Developing', 'Testing'],
    author: {
      name: 'Gabriel Rozzetti',
      detailsUrl: 'https://github.com/rozzettimatheus',
      imageUrl: 'https://github.com/rozzettimatheus.png'
    },
    title: 'Make your next presentation unforgettable',
    excerpt: 'Teste 1234 de article teste um dois tres quatro cinco seis',
    imageUrl: 'https://source.unsplash.com/random/400x400',
    publishedAt: new Date()
  }

  return (
    <section className="py-12">
      <div className="grid grid-cols-article gap-y-10 gap-x-8">
        {Array.from({ length: 20 }, (_, i) => i).map((a, idx) =>
          idx === 0 ? (
            <MainArticleCard key={a} data={data} />
          ) : (
            <ArticleCard key={a} data={data} />
          )
        )}
      </div>
    </section>
  )
}
