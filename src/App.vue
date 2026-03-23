<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-primary px-4 sm:px-12 md:px-16 lg:px-24 xl:px-64 2xl:px-96 py-4 flex items-center justify-between">
    <RouterLink to="/" class="flex items-center gap-2 text-white text-xl font-semibold tracking-tight">
      <img src="/favicon.ico" alt="Repo Finder logo" class="w-7 h-7" />
      Repo Finder
    </RouterLink>
    <nav>
      <RouterLink
        to="/favorites"
        class="px-5 py-2 bg-accent text-white text-sm shadow-md font-medium rounded-2xl hover:bg-accent hover:text-white transition-colors duration-200"
      >
        Favorites
      </RouterLink>
    </nav>
  </header>
  <main class="min-h-screen bg-background px-4 sm:px-12 md:px-16 lg:px-24 xl:px-64 2xl:px-96 py-6">
    <RouterView />
  </main>
  <footer class="bg-primary px-4 sm:px-12 md:px-16 lg:px-24 xl:px-64 2xl:px-96 py-4 flex justify-center">
    <span class="text-white text-sm">James Baes</span>
  </footer>
</template>

