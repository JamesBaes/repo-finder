export interface SearchResponse {
  total_count: number
  incomplete_results: boolean
  items: Repository[]
}

export interface RepositoryOwner {
  login: string
  avatar_url: string
}

export interface Repository {
  id: number
  name: string
  full_name: string
  description: string
  language: string
  updated_at: string
  owner: RepositoryOwner
}

export interface License {
  key: string
  name: string
  spdx_id: string | null
  url: string | null
  node_id: string
}

export interface RepoDetail extends Repository{
  forks_count: number
  watchers_count: number
  open_issues_count: number
  subscribers_count: number
  homepage: string | null
  topics: string[]
  license: License | null
  created_at: string
  default_branch: string
}