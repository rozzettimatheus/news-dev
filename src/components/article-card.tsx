import { dateUtils } from '@/lib/utils/date'
import Image from 'next/image'

type ArticleCardProps = {
  data: {
    title: string
    imageUrl: string
    excerpt: string
    publishedAt: Date
    tags: string[]
    author: {
      name: string
      detailsUrl: string
      imageUrl: string
    }
  }
}

function renderTags(tags: string[] = []) {
  const [first, ...rest] = tags
  if (!first) return null
  return (
    <>
      <span className="inline-block py-1 px-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 rounded-full text-sm">
        {first}
      </span>
      {rest?.length > 0 && (
        <span className="inline-block py-1 px-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 rounded-full text-sm ml-1">
          {rest.length} more...
        </span>
      )}
    </>
  )
}

export function ArticleCard({ data }: ArticleCardProps) {
  const { title, imageUrl, excerpt, publishedAt, tags, author } = data
  const { name, imageUrl: authorImageUrl, detailsUrl } = author

  return (
    <div className="article-card flex gap-4 items-stretch h-48 overflow-hidden">
      <Image
        src={imageUrl + '?sig=' + Math.round(Math.random() * 10)}
        alt={title}
        width={280}
        height={160}
        quality={100}
        className="w-72 block aspect-video object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div>
          {renderTags(tags)}
          <span className="text-sm inline-block ml-3">8 min to read</span>
        </div>
        <strong className="text-xl mt-2 font-bold leading-tight block">
          {title}
        </strong>
        <p className="text-zinc-400 text-sm">{excerpt}</p>
        <div className="flex items-center gap-4 mt-auto">
          <Image
            src={authorImageUrl}
            alt={`Author's name: ${name}`}
            width={48}
            height={48}
            quality={100}
            className="h-12 w-12 rounded-full border p-0.5 border-zinc-100"
          />
          <div className="flex flex-col">
            <span className="text-md font-bold text-zinc-100">{name}</span>
            <time className="text-sm text-zinc-400">
              {dateUtils.format(publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
