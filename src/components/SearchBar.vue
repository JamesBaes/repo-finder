<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ search: [query: string]}>()
const query = ref('')
let timer: number

const handleSearch = () => {
  emit('search', query.value)
}

const onInput = () => {
  clearTimeout(timer)

  if (!query.value.trim()) return

  timer = setTimeout(() => {
    handleSearch()
  }, 500)
}


</script>

<template>
  <div class="flex items-center w-full max-w-4xl bg-white rounded-full shadow-md border border-gray-200 overflow-hidden px-4 py-4 gap-2 focus-within:ring-2 focus-within:ring-primary transition-all duration-200">
    <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    <label for="search" class="sr-only">Search repositories</label>
    <input
      id="search"
      type="text"
      v-model="query"
      placeholder="Search repositories..."
      @input="onInput"
      @keyup.enter="handleSearch"
      class="flex-1 bg-transparent text-text text-sm focus:outline-none placeholder-gray-400"
    />
  </div>
</template>
