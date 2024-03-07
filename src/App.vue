<script setup lang="ts">
import AppHeader from '@common/AppHeader/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <app-header />
  <main class="main-content">
    <router-view />
  </main>
</template>

<style lang="scss">
html, body {
  background-color: var(--background-primary);
  height: 100%;
  margin: 0;
  overflow-y: auto;
  padding: 0;
}

#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: green;
  position: relative;
  min-height: 100%;
  width: 100%;
}

.main-content {
  background-color: coral;
  flex-shrink: 0;
  height: 2500px;
}

* {
  transition: background-color .3s, color .3s, border-color .3s;
}
</style>
