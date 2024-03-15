<script setup lang="ts">
import { watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AppHeader from '@common/AppHeader.vue'
import AppFooter from '@common/AppFooter.vue'

const route = useRoute()
const app = document.querySelector('#app')

watch(route, () => {
  const classList = app?.classList
  if (route.meta.layout === 'default') {
    classList?.add('app--default-layout')
    classList?.remove('app--fullscreen-layout')
  } else {
    classList?.add('app--fullscreen-layout')
    classList?.remove('app--default-layout')
  }
})
</script>

<template>
  <app-header />
  <main class="app-main">
    <router-view />
  </main>
  <app-footer v-if="$route.meta.layout === 'default'" />
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

html {
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: var(--background-primary);

  &:has(.app--fullscreen-layout) {
    overflow: hidden;
  }
}

.app {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  
  &--default-layout {
    padding: 80px 0 0;

    @media (max-width: 680px) {
      padding: 0 0 81px;
    }
  }
}

.app-main {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
}
</style>
