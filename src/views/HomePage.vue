<script setup lang="ts">
import RepoCard from '@/components/RepoCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useSearch } from '@/composables/useSearch';

const { results, loading, error, search, hasSearched } = useSearch()


</script>

<template>
  <SearchBar @search="search" />
  
  <div v-if="loading">
    <p class="text-lg">loading...</p>
  </div>

  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>

  <div v-else-if="hasSearched && results.length === 0">
    <p>no results found</p>
  </div>

  <div v-else>
     <RepoCard v-for="repo in results" :key="repo.id" :repo="repo" />
  </div>
</template>

<style scoped>

</style>