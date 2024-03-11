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
  background-color: var(--background-primary);
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  min-height: 100%;
  padding: 0;
}

.app {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  
  &--default-layout {
    margin: 80px 0 0;

    @media (max-width: 680px) {
      margin: 0 0 81px;
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
