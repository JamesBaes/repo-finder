<script setup lang="ts">
import RepoCard from '@/components/RepoCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useSearch } from '@/composables/useSearch';

const { results, loading, error, search, hasSearched, loadMore } = useSearch()


</script>

<template>
  <div class="flex flex-col items-center gap-8 py-12">

    <div class="flex flex-col items-center gap-6 w-full max-w-4xl">
      <h1 class="text-3xl font-light text-text">Search for a Repository</h1>
      <SearchBar class="w-full" @search="search" />
    </div>

    <div class="w-full max-w-4xl">
      <div v-if="loading">
        <p class="text-center text-text-muted">Loading...</p>
      </div>

      <div v-else-if="error">
        <p class="text-center text-red-500">{{ error }}</p>
      </div>

      <div v-else-if="hasSearched && results.length === 0">
        <p class="text-center text-text-muted">No results found.</p>
      </div>

      <div v-else class="flex flex-col gap-4">
        <RepoCard v-for="repo in results" :key="repo.id" :repo="repo" />
      </div>

      <div v-if="hasSearched && results.length > 0" class="flex justify-center mt-6">
        <button
          v-if="!loading"
          @click="loadMore"
          type="button"
          class="px-8 py-2 bg-primary text-white font-semibold rounded-lg hover:cursor-pointer hover:bg-accent transition-colors duration-200"
        >
          Load More
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>