import type { SearchResponse } from "@/types"

const baseSearchRepoURL = "https://api.github.com/search/repositories?"

export const searchRepositories = async (query: string) => {

  // utilized URLSearchParams to handle the encoding automatically.
  const params = new URLSearchParams({ q: query })
  
  // added auth header for higher limit for requests
  const res = await fetch(baseSearchRepoURL + params, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`
    }
  })

  if (!res.ok) {
    throw new Error("An error occurred fetching repositories")
  }
  const data = await res.json() as SearchResponse
  return data.items
}


