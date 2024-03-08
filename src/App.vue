<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@common/AppHeader/AppHeader.vue'
import AppFooter from '@common/AppFooter/AppFooter.vue'
</script>

<template>
  <app-header />
  <router-view v-slot="{ Component }">
    <main
      :class="[
        'main-content',
        { 'main-content--contained' : $route.meta.layout === 'contained' }
      ]"
    >
      <component :is="Component" />
    </main>
    <app-footer v-if="$route.meta.layout === 'contained'" />
  </router-view>
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
