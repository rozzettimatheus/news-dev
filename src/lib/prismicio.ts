import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import config from '@/../slicemachine.config.json'

import { env } from '@/config/env'

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName

const routes: prismic.ClientConfig['routes'] = [
  // Examples:
  // {
  // 	type: "homepage",
  // 	path: "/",
  // },
  // {
  // 	type: "page",
  // 	path: "/:uid",
  // },
]

const createPrismicConfig = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    accessToken: env.PRISMIC_ACCESS_TOKEN,
    ...config
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })

  return client
}

export const prismicClient = createPrismicConfig()

export const getArticleBySlug = async (slug: string) =>
  await prismicClient.getByUID('article', slug)

export const getArticles = async ({
  page = 1,
  pageSize = 10
}: {
  page: number
  pageSize: number
}) =>
  await prismicClient.getByType('article', {
    page,
    pageSize,
    fetchLinks: ['author.name', 'author.avatar', 'author.bio']
  })
