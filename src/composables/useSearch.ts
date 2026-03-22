import { searchRepositories } from "@/services/github";
import type { Repository } from "@/types";
import { ref } from "vue";

// composable for searching github repositories
export const useSearch = () => {

  // reactive variables
  const results = ref<Repository[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)


  const search = async (query: string) => {

    loading.value = true
    error.value = null

    try {
      results.value = await searchRepositories(query)
    } catch (err) {
      console.log(err)
      error.value = "An error occurred fetching repositories."
    } finally {
      loading.value = false
    }
  }

  return { results, loading, error, search} 
}

