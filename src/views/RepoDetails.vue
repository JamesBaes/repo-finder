<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getRepository, getRepositoryContributors } from '@/services/github';
import type { Contributor, RepoDetail } from '@/types';

const route = useRoute()
const owner = String(route.params.owner)
const name = String(route.params.name)

const result = ref<RepoDetail | null>(null)
const contributorsResult = ref<Contributor[] | null>(null)

const loading = ref(false)
const error = ref<string | null>(null)

onMounted(async () => {
  loading.value = true
  error.value = null

  try {
      result.value = await getRepository(owner, name)
      contributorsResult.value = await getRepositoryContributors(owner, name)
  } catch (err) {
    console.log(err)
    error.value = "An error occurred getting the repository details"
  } finally {
    loading.value = false
  }
})


</script>

<template>
  <div class="flex flex-col items-center py-12">
    <div class="w-full max-w-4xl">

      <div v-if="loading">
        <p class="text-center text-gray-400">Loading...</p>
      </div>

      <div v-else-if="error">
        <p class="text-center text-red-500">{{ error }}</p>
      </div>

      <div v-else-if="result">
        <h1 class="text-2xl font-semibold text-gray-900 mb-1">{{ result.full_name }}</h1>
        <p v-if="result.description" class="text-gray-500 mb-6">{{ result.description }}</p>

        <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
          <span>★ {{ result.stargazers_count.toLocaleString() }} stars</span>
          <span>👁 {{ result.watchers_count.toLocaleString() }} watchers</span>
          <span>📦 {{ result.subscribers_count }} subscribers</span>
          <span v-if="result.license">⚖ {{ result.license.name }}</span>
          <span>Created {{ new Date(result.created_at).toLocaleDateString() }}</span>
          <a v-if="result.homepage" :href="result.homepage" target="_blank" class="text-accent hover:underline">Homepage</a>
        </div>

        <div v-if="result.topics?.length" class="flex flex-wrap gap-2 mb-8">
          <span v-for="topic in result.topics" :key="topic" class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            {{ topic }}
          </span>
        </div>

        <h2 class="text-lg font-semibold text-gray-800 mb-4">Contributors</h2>
        <div class="flex flex-col gap-3">
          <div v-for="contributor in contributorsResult" :key="contributor.login" class="flex items-center gap-3">
            <img :src="contributor.avatar_url" :alt="contributor.login" class="w-8 h-8 rounded-full" />
            <a :href="contributor.html_url" target="_blank" class="text-sm text-accent hover:underline">{{ contributor.login }}</a>
            <span class="text-xs text-gray-400">{{ contributor.contributions }} contributions</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>