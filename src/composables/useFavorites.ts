import { ref } from "vue";
import type { Repository } from "@/types";


// load favorites
const stored = localStorage.getItem('favorites')
const favorites = ref<Repository[]>(stored ? JSON.parse(stored) : [])

// composable for managing favorite repositories using localStorage
export const useFavorites = () => {

  const addFavorite = (repo: Repository) => {
    favorites.value = [...favorites.value, repo]
    localStorage.setItem("favorites", JSON.stringify(favorites.value))
  } 

  const removeFavorite = (repo: Repository) => {
    favorites.value = favorites.value.filter((favorite) => favorite.id !== repo.id) // retains all favorites that aren't matching the target repo
    localStorage.setItem("favorites", JSON.stringify(favorites.value))
  }

  const isFavorite = (repo: Repository): boolean => {
    return favorites.value.some(favorite => favorite.id === repo.id)
  }

  return { favorites, addFavorite, removeFavorite, isFavorite }
}
