<template>
  <div>
    <ContentList v-slot="{ list }" :query="{ path: '/post', sort: { date: -1 } }">
      <article v-for="page in list" :key="page._path">
        <nuxt-link :to="page._path">
          <h2>{{ page.title }}</h2>
        </nuxt-link>
        <div>{{ page.desc }}</div>
      </article>
    </ContentList>
  </div>
</template>
<style scoped>
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