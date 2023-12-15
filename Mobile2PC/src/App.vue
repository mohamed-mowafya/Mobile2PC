<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <p class="header-font text-white text-5xl p-2">Mobile2PC</p>
  </header>
  <RouterView />
</template>

<style>
body,
html {
  background-color: black;
}
.header-font {
  font-family: 'Rubik Maze', cursive;
}
</style>
