import type { Contributor, RepoDetail, SearchResponse } from "@/types"

const baseSearchRepoURL = "https://api.github.com/search/repositories?"
const baseRepoDetailsURL = "https://api.github.com/repos"

export const searchRepositories = async (query: string, page: number) => {

  // utilized URLSearchParams to handle the encoding automatically.
  const params = new URLSearchParams({ q: query, page: String(page) })
  
  const res = await fetch(baseSearchRepoURL + params, {
    headers: {
      Accept: 'application/vnd.github+json'
    }
  })

  if (!res.ok) {
    throw new Error("An error occurred fetching repositories")
  }
  const data = await res.json() as SearchResponse
  return data.items
}

export const getRepository = async (owner: string, name: string) => {

  const res = await fetch(`${baseRepoDetailsURL}/${owner}/${name}`, {
    headers: {
      Accept: 'application/vnd.github+json'
    }
  })

  if(!res.ok) {
    throw new Error("An error occurred fetching repository details")
  }

  const data = await res.json() as RepoDetail
  return data
}

export const getRepositoryContributors = async (owner: string, name: string) => {

  const res = await fetch(`${baseRepoDetailsURL}/${owner}/${name}/contributors`, {
    headers: {
      Accept: 'application/vnd.github+json'
    }
  })
  
  if(!res.ok) {
    throw new Error("An error occurred fetching repository contributors")
  }

  const data = await res.json() as Contributor[]
  return data
}


