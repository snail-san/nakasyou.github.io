<script setup lang="ts">
import Header from "../../components/header.vue"
import Work from "../../components/works/work.vue"
import works from "../../components/works.ts"
</script>
<template>
  <header><Header /></header>
  <h1 class="text-3xl">Works</h1>
  <Work :work="works[0]" />
</template>
