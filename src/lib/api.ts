export async function api(path: string, init?: RequestInit) {
  // TODO: fix public env - publicEnv.NEXT_PUBLIC_API_BASE_URL
  const baseUrl = 'http://localhost:3000'
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)
  return fetch(url, init)
}
