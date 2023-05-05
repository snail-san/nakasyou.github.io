<script setup type="ts">
import {
  IconBrandGithub,
  IconBrandTwitter,
} from '@tabler/icons-vue'
import SimpleIcons from "../components/simpleicons.vue"

</script>
<template>
  <div>
    <div class="text-center text-3xl">nakasyou's profile</div>
    <div class="flex items-center justify-center text-center">
      <div><img
        alt="nakasyou-icon"
        src="~/assets/nakasyou-icon.png"
        class="rounded-full w-24 h-24" /></div>
      <div class="ext-2xl">Shotaro Nakamura</div>
    </div>
    <div class="mx-10">
      <div class="text-2xl">About</div>
      <div class="indent-1">
        <div>
          <div>Shotaro Nakamura</div>
          <div class="text-sm text-slate-400 indent-2">中村 承太郎</div>
        </div>
        <div>Web開発と分散型アプリケーション、サイバーセキュリティに興味がある中学2年生</div>
      </div>
      <div class="text-2xl">Skills</div>
      <div class="indent-1">
        <div>
          <ul class="flex flex-wrap">
            <li>Python: ★★★★★</li>
            <li>JavaScript: ★★★★★</li>
            <li>Deno: ⭐︎★★★★</li>
            <li>TypeScript: ⭐︎★★★★</li>
            <li>HTML&amp;CSS: ⭐︎★★★★</li>
            <li>Vue.js ⭐︎⭐︎★★★</li>
            <li>React ⭐︎⭐︎⭐︎★★</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <a class="btn btn-outline" href="https://github.com/nakasyou">
        <IconBrandGithub />
        <span>@nakasyou</span>
      </a>
      <a class="btn btn-outline" href="https://twitter.com/nakasyou0">
        <IconBrandTwitter />
        <span>@nakasyou0</span>
      </a>
      <a class="btn btn-outline" href="https://twitter.com/nakasyou0">
        <SimpleIcons icon="matrix" />
        <span>@nakasyou:matrix.org</span>
      </a>
    </div>
  </div>
</template>
