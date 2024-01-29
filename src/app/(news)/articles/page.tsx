import { ArticleCard } from '@/components/article'
import { Pagination } from '@/components/pagination'
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
      <div className="grid grid-cols-article-v md:grid-cols-article-h gap-y-10 gap-x-8">
        {Array.from({ length: 10 }, (_, i) => i).map((a, idx) => (
          <ArticleCard
            key={a}
            type={idx === 0 ? 'main' : 'default'}
            data={data}
          />
        ))}
      </div>
      <Pagination />
    </section>
  )
}
