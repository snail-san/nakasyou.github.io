<script setup lang="ts">
import { type Work } from "../works.ts"

const props = defineProps<
  work: Work
>()
</script>
<template>
  <a :href="work.link">
    <div class="card w-52 bg-base-100 shadow-xl image-full">
      <figure><img :src="work.imageUrl? work.imageUrl : '/work-images/no-image.png'" :alt="work.title" /></figure>
        <div class="card-body">
          <div class="card-title break-all">
            {{ work.title }}
          </div>
        <p class="break-all">{{ work.desc }}</p>
      </div>
    </div>
  </a>
</template>
