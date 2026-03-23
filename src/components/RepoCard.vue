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
  <div @click="routeToRepo" class="border-8 border-black rounded-lg p-4">
    <button v-if="!isFavorite(repo)" @click.stop="toggleFavorite(repo)" class="w-2xl h-12">Favorite</button>
    <button v-else @click.stop="toggleFavorite(repo)">Unfavorite</button>
    
    <h2 class="text-lg font-bold">{{ repo.name }}</h2>
    <p class="text-sm">{{ repo.description }}</p>
    <p class="text-sm">{{ repo.owner.login }}</p>
    <p class="text-sm">{{ repo.stargazers_count }}</p>
    <p class="text-sm">{{ repo.language }}</p>
    <p class="text-sm">{{ repo.updated_at }}</p>
  </div>
</template>

<style scoped>

</style>