<script setup type="ts">
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandMatrix,
  IconBrandDiscord,
  IconCode,
} from '@tabler/icons-vue'
import SimpleIcons from "../components/simpleicons.vue"
import MinWorks from "../components/min-works.vue"

const myDiscordIdCopy = () => {
  if(navigator.clipboard){
    navigator.clipboard.writeText("nakasyou#1395");
  }else alert("Copy failed...")
}
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
          <div class="text-sm indent-2">中村 承太郎</div>
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
      <div class="text-2xl">Bio</div>
      <div class="indent-1">
        <ul>
          <li>2009/11/3 生まれる</li>
          <li>2019 Scratch のアカウントを作ってみる</li>
        </ul>
      </div>
      <div class="text-2xl">Works</div>
      <MinWorks />
    </div>
    <br />
    <div class="flex flex-wrap items-center justify-center">
      <a class="btn btn-outline" href="https://github.com/nakasyou">
        <IconBrandGithub />
        <span>@nakasyou</span>
      </a>
      <a class="btn btn-outline" href="https://twitter.com/nakasyou0">
        <IconBrandTwitter />
        <span>@nakasyou0</span>
      </a>
      <a class="btn btn-outline" href="https://matrix.to/#/@nakasyou:matrix.org">
        <IconBrandMatrix />
        <span>@nakasyou:matrix.org</span>
      </a>
      <div class="tooltip" data-tip="Copyed!">
        <a class="btn btn-outline" @click="myDiscordIdCopy">
          <IconBrandDiscord />
          <span>nakasyou#1395</span>
        </a>
      </div>
      <a class="btn btn-outline flex" href="https://scratch.mit.edu/users/nakasyou1103">
        <SimpleIcons icon="scratch" />
        <span>@nakasyou1103</span>
      </a>
      <a class="btn btn-outline" href="https://github.com/nakasyou/nakasyou.github.io">
        <IconCode/>
        <span>Source Code</span>
      </a>
    </div>
  </div>
</template>
