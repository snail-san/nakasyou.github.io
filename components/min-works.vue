<script setup lang="ts">
import works from "./works.ts"
</script>
<template>
  <div class="carousel rounded-box">
    <div v-for = "work in works" :key="work.link" class="carousel-item">
      <a :href="work.link">
        {{ work.title }}
      </a>
    </div>
  </div>
</template>