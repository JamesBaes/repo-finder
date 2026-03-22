<script setup lang="ts">
  import type { Repository } from '@/types';
  import { useFavorites } from '@/composables/useFavorites';

  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  defineProps<{ repo: Repository}>()

  const toggleFavorite = (repo: Repository) => {
    if (isFavorite(repo)) {
      removeFavorite(repo)
    } else{
      addFavorite(repo)
    }
  }

</script>

<template>
  <div class="border rounded-lg p-4">
    <button v-if="!isFavorite(repo)" @click="toggleFavorite(repo)" class="w-2xl h-12">Favorite</button>
    <button v-else @click="toggleFavorite(repo)">Unfavorite</button>
    
    <h2 class="text-lg font-bold">{{ repo.name }}</h2>
    <p class="text-sm">{{ repo.description }}</p>
    <p class="text-sm">{{ repo.owner.login }}</p>
  </div>
</template>

<style scoped>

</style>