<script setup lang="ts">
import RepoCard from '@/components/RepoCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useSearch } from '@/composables/useSearch';

const { results, search } = useSearch()


</script>

<template>
  <SearchBar @search="search" />
  <div>
     <RepoCard v-for="repo in results" :key="repo.id" :repo="repo" />
  </div>
</template>

<style scoped>

</style>