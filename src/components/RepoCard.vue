<script setup lang="ts">
  import type { Repository } from '@/types';

  defineProps<{ repo: Repository}>()

</script>

<template>
  <div class="border rounded-lg p-4">
    <h2 class="text-lg font-bold">{{ repo.name }}</h2>
    <p class="text-sm">{{ repo.description }}</p>
    <p class="text-sm">{{ repo.owner.login }}</p>
  </div>
</template>

<style scoped>

</style>