<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ search: [query: string]}>()

const query = ref('')

const handleSearch = () => {
  emit('search', query.value)
}
</script>

<template>
  <div class="w-2xl h-12">
    <input type="text" v-model="query" />
    <button @click="handleSearch" type="button">Search</button>
  </div>
</template>

<style scoped>

</style>