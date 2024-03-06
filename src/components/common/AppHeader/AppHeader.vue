<script setup lang="ts">
import AppHeaderLink from './childs/AppHeaderLink.vue'
</script>

<template>
  <header class="appHeader">
    <svg class="appHeader__logo">
      <use href="#logo-full" />
    </svg>
    <nav class="appHeader__nav">
      <app-header-link to="/" />
      <app-header-link to="/references" />
      <app-header-link to="/" />
    </nav>
  </header>
</template>

<style lang="scss">
.appHeader {
  align-items: center;
  background-color: red;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__logo {
    --text: var(--system-solid-800);
    --symbol: var(--accent-solid-600);

    height: 32px;
    width: 224px;
  } 
}
</style>