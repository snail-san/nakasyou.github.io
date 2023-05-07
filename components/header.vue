<script setup>
import { ref } from 'vue'

const dropdown = ref(null)
const dropdownBtn = ref(null)

onMounted(()=>{

  window.addEventListener('click', (event) => {
    if(!dropdown.value.contains(event.target)){
      dropdownBtn.value.blur()
    }
  })

})
const close = () =>{
  console.log('close')
  document.activeElement.blur()
}
</script>
<template>
  <div class="sticky top-0">
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <NuxtLink class="btn btn-ghost normal-case text-xl" href="/">nakasyou's website</NuxtLink>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal bg-base-100 rounded-box max-lg:hidden">
        <li><NuxtLink to="/post">Blog</NuxtLink></li>
        <li><NuxtLink to="/works">Works</NuxtLink></li>
      </ul>
      <div class="dropdown dropdown-end" ref="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden" ref="dropdownBtn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><NuxtLink to="/post">Blog</NuxtLink></li>
          <li><NuxtLink to="/works">Works</NuxtLink></li>
          <li><button @click="close" class="btn btn-ghost">Close</button></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>
