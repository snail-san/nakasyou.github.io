<script setup lang="ts">
import works from "./works.ts"
</script>
<template>
  <div class="carousel rounded-box">
    <div v-for = "work in (works.slice(0,10))" :key="work.link" class="carousel-item">
      <a :href="work.link">
        <div class="card w-40 bg-base-100 shadow-xl image-full">
          <figure><img :src="work.imageUrl? work.imageUrl : ''" :alt="work.title" /></figure>
          <div class="card-body">
            <div class="card-title">
              {{ work.title }}
            </div>
            <p>{{ work.desc }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>