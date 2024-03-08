<script setup lang="ts">
import AppHeader from '@common/AppHeader/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <app-header />
  <router-view
    class="main-content main-content"
    name="FullScreen"
  />
  <router-view
    name="Contained"
    class="main-content main-content--contained"
  />
</template>

<style lang="scss">
html, body {
  background-color: var(--background-primary);
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
}

.main-content {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  &--contained {
    margin: 80px 0 0;

    @media (max-width: 680px) {
      margin: 0 0 81px;
    }
  }
}

* {
  transition: background-color .6s, color .6s, border-color .6s;
}
</style>
