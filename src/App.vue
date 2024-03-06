<script setup lang="ts">
import AppHeader from '@common/AppHeader/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
body {
  background-color: var(--background-primary);
  margin: 0;
  min-height: 100vh;
}
</style>
