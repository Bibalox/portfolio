<script setup lang="ts">
import { watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AppHeader from '@common/AppHeader/AppHeader.vue'
import AppFooter from '@common/AppFooter/AppFooter.vue'

const route = useRoute()
const app = document.querySelector('#app')

watch(route, () => {
  if (route.meta.layout === 'default') {
    app?.classList.add('app--default-layout')
  } else {
    app?.classList.remove('app--default-layout')
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

body {
  background-color: var(--background-primary);
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
