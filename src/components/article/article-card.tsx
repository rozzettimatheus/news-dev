import Image from 'next/image'

import { dateUtils } from '@/lib/utils/date'
import { Tag } from '@/components/ui/tag'
import { twMerge } from 'tailwind-merge'
import { AuthorDocument } from '../../../prismicio-types'

export type Thumbnail = {
  url?: string | null
  alt?: string | null
  dimensions?: {
    width: number
    height: number
  } | null
}

type ArticleCardProps = {
  type: 'default' | 'main'
  title: string
  thumbnail: Thumbnail
  updatedAt: Date
  excerpt: string
  tags: string[]
  author: AuthorDocument
}

const twClasses = {
  main: {
    root: 'row-span-1 md:row-span-3 col-span-1 sm:col-span-2 md:col-span-1 h-auto bg-zinc-950 dark:bg-zinc-50 rounded-md p-5',
    thumbnail: '',
    readingTime: 'sm:text-md dark:text-zinc-200',
    heading:
      'text-xl sm:text-3xl md:text-4xl text-zinc-50 dark:text-zinc-950 md:mt-4',
    excerpt: 'text-zinc-100  md:text-base',
    avatar: 'sm:h-14 sm:w-14 border-zinc-100',
    author: 'sm:text-lg font-bold text-zinc-50',
    publishedDate: 'sm:text-md text-zinc-200'
  },
  default: {
    root: 'md:flex-row md:h-48',
    thumbnail: 'md:w-72',
    readingTime: '',
    heading: 'text-lg md:text-xl',
    excerpt: 'text-zinc-500 md:text-zinc-400',
    avatar: 'md:h-12 md:w-12 border-zinc-700 dark:border-zinc-100',
    author: 'md:text-md text-zinc-900 dark:text-zinc-100',
    publishedDate: 'md:text-sm text-zinc-500 dark:text-zinc-400'
  } as const
}

export function ArticleCard(props: ArticleCardProps) {
  const { title, thumbnail, excerpt, tags, type, updatedAt, author } = props
  const [firstTag, ...restTags] = tags ?? []

  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 items-stretch overflow-hidden',
        twClasses[type].root
      )}
    >
      <Image
        src={thumbnail.url ?? ''}
        alt={thumbnail.alt ?? ''}
        width={type === 'default' ? 280 : 1280}
        height={type === 'default' ? 160 : 720}
        quality={100}
        className={twMerge(
          'w-full block aspect-video object-cover rounded-md',
          twClasses[type].thumbnail
        )}
      />
      <div className="flex flex-col gap-2 h-full">
        <div>
          {!!firstTag && (
            <>
              <Tag
                name={firstTag}
                className={twMerge(
                  type === 'main'
                    ? 'bg-zinc-50 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50'
                    : null
                )}
              />
              {restTags?.length > 0 && (
                <Tag
                  name={restTags.length + ' more...'}
                  className={twMerge(
                    'ml-1',
                    type === 'main' ? 'bg-zinc-50 text-zinc-950' : null
                  )}
                />
              )}
            </>
          )}
          <span
            className={twMerge(
              'text-sm inline-block ml-3',
              twClasses[type].readingTime
            )}
          >
            8 min to read
          </span>
        </div>
        <strong
          className={twMerge(
            'block leading-tight font-bold mt-2',
            twClasses[type].heading
          )}
        >
          {title}
        </strong>
        <p className={twMerge('text-sm', twClasses[type].excerpt)}>{excerpt}</p>
        <div className="flex items-center gap-3 md:gap-4 mt-auto">
          <Image
            src={author.data.avatar?.url ?? ''}
            alt={`Author - ${author.data.name}`}
            width={author.data.avatar.dimensions?.width}
            height={author.data.avatar.dimensions?.height}
            quality={100}
            className={twMerge(
              'h-10 w-10 rounded-full border p-0.5 object-cover',
              twClasses[type].avatar
            )}
          />
          <div className="flex flex-col">
            <span
              className={twMerge('text-sm font-bold', twClasses[type].author)}
            >
              {author.data.name}
            </span>
            <time className={twMerge('text-xs', twClasses[type].publishedDate)}>
              {dateUtils.format(updatedAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
