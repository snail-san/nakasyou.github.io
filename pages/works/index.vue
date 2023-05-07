<script setup lang="ts">
import Header from "../../components/header.vue"
import Work from "../../components/works/work.vue"
import works from "../../components/works.ts"
</script>
<template>
  <header><Header /></header>
  <div class="mx-10">
    <h1 class="text-3xl">Works</h1>
    <div class="grid grid-cols-4 gap-4">
      <div v-for = "work in works.reverse()" :key="work.link" class="mx-1">
        <Work :work="work" />
      </div>
    </div>
  </div>
</template>
