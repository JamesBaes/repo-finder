import type { SearchResponse } from "@/types"

const baseSearchRepoURL = "https://api.github.com/search/repositories?"

/*
  this function searches for repositories on github by 
  concatenating the baseSearchRepoURL with the query 
  input form the user
*/
export const searchRepositories = async (query: string) => {

  // utilized URLSearchParams to handle the encoding automatically.
  const params = new URLSearchParams({ q: query })

  const res = await fetch(baseSearchRepoURL + params)
  if (!res.ok) {
    return null
  }
  const data = await res.json() as SearchResponse
  return data.items
}


