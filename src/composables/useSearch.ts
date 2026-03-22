import { searchRepositories } from "@/services/github";
import type { Repository } from "@/types";
import { ref } from "vue";

// composable for searching github repositories
export const useSearch = () => {

  // reactive variables
  const results = ref<Repository[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const hasSearched = ref(false)
  const currentQuery = ref("")
  const page = ref(1)


  const loadMore = async () => {
    
    loading.value = true
    error.value = null

    try {
      page.value++
      const newResults = await searchRepositories(currentQuery.value, page.value)
      results.value = [...results.value, ...newResults]
    } catch (err) {
      console.log(err)
      error.value = "An error occurred loading more" 
    } finally {
      loading.value = false
    }
  }

  const search = async (query: string) => {

    loading.value = true
    error.value = null
    currentQuery.value = query
    page.value = 1

    try {
      results.value = await searchRepositories(query, page.value)
    } catch (err) {
      console.log(err)
      error.value = "An error occurred fetching repositories."
    } finally {
      loading.value = false
      hasSearched.value = true
    }
  }

  return { results, loading, error, search, hasSearched, loadMore } 
}

