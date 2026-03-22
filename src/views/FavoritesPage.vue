<script setup lang="ts">
import { useFavorites } from '@/composables/useFavorites';
import RepoCard from '@/components/RepoCard.vue';

const { favorites } = useFavorites()

</script>

<template>
  <div>
    <div v-if="favorites.length === 0">
      No favorites
    </div>
    <div v-else>
      <RepoCard v-for="favorite in favorites" :key="favorite.id" :repo="favorite" />
    </div>
  </div>
</template>

<style scoped>

</style>