<script setup lang="ts">
const props = defineProps<{
  class: string
  icon: string
}>()
</script>
<template>
  <img :class="class" :src="`https://cdn.jsdelivr.net/npm/simple-icons@8.12.1/icons/${icon}.svg`" />
</template>
