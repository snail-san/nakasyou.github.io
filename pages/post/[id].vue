<template>
  <div>
    <ContentDoc v-slot="{ doc: page }">
      <h1>{{ page.title }}</h1>
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