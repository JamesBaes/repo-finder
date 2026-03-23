<script setup lang="ts">
  import type { Repository } from '@/types';
  import { useFavorites } from '@/composables/useFavorites';
  import { useRouter } from 'vue-router';

  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const router = useRouter()

  const props = defineProps<{ repo: Repository}>()

  const toggleFavorite = (repo: Repository) => {
    if (isFavorite(repo)) {
      removeFavorite(repo)
    } else{
      addFavorite(repo)
    }
  }

  const routeToRepo = () => {
    router.push({ 
      name: 'repo-details', params: { owner: props.repo.owner.login, name: props.repo.name } 
    })
  }

</script>

<template>
  <div @click="routeToRepo" class="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-md transition-shadow duration-200">
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1 min-w-0">
        <h2 class="text-base font-semibold text-gray-900 truncate">{{ repo.name }}</h2>
        <p class="text-sm text-gray-500">{{ repo.owner.login }}</p>
        <p v-if="repo.description" class="text-sm text-gray-600 mt-2 line-clamp-2">{{ repo.description }}</p>
      </div>
      <!-- .stop to prevent the card from firing routeToRepo -->
      <button
        @click.stop="toggleFavorite(repo)"
        class="shrink-0 px-3 py-1 text-xs font-medium rounded-full border hover:cursor-pointer transition-colors duration-200"
        :class="isFavorite(repo) ? 'bg-accent text-white border-accent' : 'text-accent border-accent hover:bg-accent hover:text-white'"
      >
        {{ isFavorite(repo) ? 'Saved' : 'Save' }}
      </button>
    </div>

    <div class="flex items-center gap-4 mt-4 text-xs text-gray-500">
      <span v-if="repo.language">{{ repo.language }}</span>
      <span>★ {{ repo.stargazers_count.toLocaleString() }}</span>
      <span>Updated {{ new Date(repo.updated_at).toLocaleDateString() }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>