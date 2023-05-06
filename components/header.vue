<script setup>
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" href="/">nakasyou's website</NuxtLink>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal bg-base-100 rounded-box max-lg:hidden">
        <li><NuxtLink to="/post">Blog</NuxtLink></li>
        <li><NuxtLink to="/works">Works</NuxtLink></li>
      </ul>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
        </div> 
        <div class="drawer-side fixed">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>         
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>