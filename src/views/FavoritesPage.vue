<script setup lang="ts">
import { useFavorites } from '@/composables/useFavorites';
import RepoCard from '@/components/RepoCard.vue';

const { favorites } = useFavorites()

</script>

<template>
  <div class="flex flex-col items-center gap-8 py-12">
    <div class="w-full max-w-4xl">
      <h1 class="text-3xl font-light text-center text-text mb-6">Favorites</h1>
      <div v-if="favorites.length === 0">
        <p class="text-center text-gray-400">No favorites saved yet.</p>
      </div>
      <div v-else class="flex flex-col gap-4">
        <RepoCard v-for="favorite in favorites" :key="favorite.id" :repo="favorite" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>