<script setup lang="ts">
const { data } = await queryContent('/post').where({ tags: { $contains: $route.params.tag } })
</script>
<template>
  <div>{{ JSON.stringify(data) }}</div>
</template>
