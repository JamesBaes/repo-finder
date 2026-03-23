<script setup lang="ts">
import { useRoute } from 'vue-router';
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
  <div v-if="loading">
    loading...
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else-if="result"> 
    <h1>{{ result.full_name }}</h1>
    <h2>{{ result.created_at }}</h2>
    <h2>{{ result.homepage }}</h2>
    <h2>{{ result.watchers_count }}</h2>
    <h2>{{ result.license?.name }}</h2>
    <h2>{{ result.subscribers_count}}</h2>
    <h2>{{ result.topics }}</h2>
    <div v-for="contributor in contributorsResult" :key="contributor.login">
      {{ contributor.login }} {{ contributor.avatar_url }} {{ contributor.contributions }} {{ contributor.html_url }}
    </div>
  </div>  
</template>

<style scoped>

</style>