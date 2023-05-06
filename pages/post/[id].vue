<script setup lang="ts">
import {
  IconCalendarEvent,
  IconReload,
} from '@tabler/icons-vue'

const yyyymmdd = (dt: Date): string => {
  const y = dt.getFullYear()
  const m = ('00' + (dt.getMonth()+1)).slice(-2)
  const d = ('00' + dt.getDate()).slice(-2)
  return y + '-' + m + '-' + d
}
</script>
<template>
  <div>
    <ContentDoc v-slot="{ doc: page }">
      <div class="text-center">
        <img :src="page.thumbnail" alt="thumbnail" class="w-5/6 h-4/6 object-cover ">
      </div>
      <h1>{{ page.title }}</h1>
      <div class="flex">
        <div class="flex">
          <IconCalendarEvent />
          <div>{{ yyyymmdd(page.date) }}</div>
        </div>
        <div class="flex">
          <IconReload />
          <div>{{ (page.update) }}</div>
        </div>
      </div>
      <ContentRenderer :key="page._id" :value="page"></ContentRenderer>
    </ContentDoc>
  </div>
</template>
<style>
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.17em;
}
h4 {
  font-size: 1.00em;
}
h5 {
  font-size: 0.83em;
}
h6 {
  font-size: 0.67em;
}
</style>