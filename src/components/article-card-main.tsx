import { dateUtils } from '@/lib/utils/date'
import Image from 'next/image'

type MainArticleCardProps = {
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
      <span className="inline-block py-1 px-3 bg-zinc-50 text-zinc-950 rounded-full text-sm">
        {first}
      </span>
      {rest?.length > 0 && (
        <span className="inline-block py-1 px-3 bg-zinc-50 text-zinc-950 rounded-full text-sm ml-1">
          {rest.length} more...
        </span>
      )}
    </>
  )
}

export function MainArticleCard({ data }: MainArticleCardProps) {
  const { title, imageUrl, excerpt, publishedAt, tags, author } = data
  const { name, imageUrl: authorImageUrl, detailsUrl } = author

  return (
    <div className="row-span-3 flex flex-col gap-4 items-stretch h-auto overflow-hidden bg-violet-500 rounded-md p-5">
      <Image
        src={imageUrl + '?sig=' + Math.round(Math.random() * 10)}
        alt={title}
        width={280}
        height={160}
        quality={100}
        className="w-full block aspect-video object-cover rounded-md"
      />
      <div className="flex flex-col gap-2 h-full">
        <div className="flex items-center">
          {renderTags(tags)}
          <span className="text-md text-zinc-200 inline-block ml-3">
            8 min to read
          </span>
        </div>
        <strong className="text-3xl text-zinc-50 mt-4 font-bold leading-tight block">
          {title}
        </strong>
        <p className="text-zinc-100 text-sm">{excerpt}</p>
        <div className="flex items-center gap-4 mt-auto">
          <Image
            src={authorImageUrl}
            alt={`Author's name: ${name}`}
            width={56}
            height={56}
            quality={100}
            className="h-14 w-14 rounded-full border p-0.5 border-zinc-100"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-zinc-50">{name}</span>
            <time className="text-md text-zinc-200">
              {dateUtils.format(publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
