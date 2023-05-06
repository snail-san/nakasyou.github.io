<script setup lang="ts">
onMounted(() => {
  setInterval(()=>console.log('mounted'),100)
});
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
