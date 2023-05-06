<template>
  <div>
    <ContentList v-slot="{ list }" :query="{ path: '/post', sort: { date: -1 } }">
      <article v-for="page in list" :key="page._path">
        <nuxt-link :to="page._path">
          <h2>{{ page.title }}</h2>
        </nuxt-link>
        <ContentDoc :path="page._path" excerpt :head="false"></ContentDoc>
      </article>
    </ContentList>
  </div>
</template>
