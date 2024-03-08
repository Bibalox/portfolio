<script setup lang="ts">
import { ref } from 'vue'
import AppHeaderLink from './childs/AppHeaderLink.vue'
import ThemeSwitcher from '@common/ThemeSwitcher/ThemeSwitcher.vue'

const routes = ref(['home', 'references', 'skills', 'contact'])
</script>

<template>
  <header class="app-header">
    <div class="app-header__background" />
    <div class="app-header__wrapper">
      <router-link to="/" class="app-header__logo-link">
        <svg class="app-header__logo app-header__logo--full">
          <use href="#logo-full" />
        </svg>
        <svg class="app-header__logo app-header__logo--compact">
          <use href="#logo-compact" />
        </svg>
      </router-link>
      
      <nav class="app-header__nav">
        <app-header-link
          v-for="route in routes"
          :id="route"
          :key="route"
        />
      </nav>

      <theme-switcher class="app-header__theme-switcher" />
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  align-items: center;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  &__background {
    background-color: var(--background-primary);
    height: 100%;
    opacity: .6;
    position: absolute;
    width: 100%;
  }

  &__wrapper {
    align-items: center;
    display: flex;
    gap: 40px;
    height: 80px;
    max-width: 1200px;
    position: relative;
    width: 100%;
  }

  &__logo {
    --text: var(--system-solid-800);
    --symbol: var(--accent-solid-600);

    height: 32px;
    width: 228px;
    
    &--compact {
      display: none;
    }
  }

  &__nav {
    display: flex;
    flex: 1;
    gap: 8px;
    justify-content: flex-end;
  }

  @media (max-width: 960px) {
    padding: 0 24px;

    &__wrapper {
      gap: 16px;
    }

    &__logo {
      width: 107px;

      &--full {
        display: none;
      }

      &--compact {
        display: block; 
      }
    }

    &__nav {
      justify-content: center;
    }
  }

  @media (max-width: 680px) {
    bottom: 0;
    border-top: 1px solid var(--system-solid-250);
    padding: 0 16px;
    top: unset;

    &__logo, &__logo-link, &__theme-switcher {
      display: none;
    }
  }
}
</style>