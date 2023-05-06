<script setup lang="ts">
onMounted(() => {
  {
    const script = document.createElement("script")
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-X7S9B5WF1H"
    script.async= true
    document.head.append(script)
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-X7S9B5WF1H');
  }
});
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>
