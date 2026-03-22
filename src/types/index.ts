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