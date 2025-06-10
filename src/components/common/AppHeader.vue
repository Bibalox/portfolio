<script setup lang="ts">
import AppHeaderLink from './childs/AppHeader/AppHeaderLink.vue'
import ThemeSwitcher from '@common/ThemeSwitcher.vue'

const routes = ['home', 'references', 'skills', 'world']
</script>

<template>
  <header class="app-header">
    <div class="app-header__wrapper">
      <div class="app-header__background" />
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

      <div class="app-header__theme-switcher-wrapper">
        <theme-switcher />
      </div>
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
    left: 0;
    opacity: .6;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  &__wrapper {
    align-items: center;
    display: flex;
    gap: 40px;
    height: 80px;
    max-width: 1200px;
    width: 100%;
  }

  &__logo {
    --text: var(--system-solid-800);
    --symbol: var(--accent-solid-600);

    height: 32px;
    width: 228px;

    &:hover {
      --text: var(--accent-solid-600);
    }
    
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
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    bottom: 0;
    padding: 8px;
    top: unset;

    &__background {
      border-radius: 24px;
      opacity: .7;
    }

    &__wrapper {
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
      border: 1px solid var(--stroke-medium);
      border-radius: 24px;
      height: unset;
      padding: 7px 4px;
    }

    &__nav {
      gap: 0;
    }

    &__logo, &__logo-link, &__theme-switcher-wrapper {
      display: none;
    }
  }
}
</style>