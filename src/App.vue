<script setup lang="ts">
import { useSearch } from './composables/useSearch';
import { watch } from 'vue';
  const { results, search } = useSearch()

  search("vue")
  
  watch(results, (val) => {
    console.log(val)
  })

</script>

<template>
  <header>

  </header>
  <main>

  </main>
</template>

<style scoped></style>
