<script setup lang="ts">
  import { searchRepositories } from './services/github';

  try {
    console.log(searchRepositories("fuwa-manager"))
  } catch (err) {
    console.log(err)
  } 

</script>

<template>
  <header>

  </header>
  <main>

  </main>
</template>

<style scoped></style>
