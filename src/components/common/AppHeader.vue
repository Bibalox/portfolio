<script setup lang="ts">
import AppHeaderLink from './childs/AppHeader/AppHeaderLink.vue'
import ThemeSwitcher from '@common/ThemeSwitcher.vue'

const routes = ['home', 'references', 'skills', 'world']
</script>

<template>
  <header class="app-header">
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

      <div class="app-header__theme-switcher-wrapper">
        <theme-switcher />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 24px 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;

  &__wrapper {
    align-items: center;
    background-color: var(--background-secondary);
    border: 1px solid rgba(255, 255, 255, .03);
    border-radius: var(--radius-xl);
    box-shadow: 0 2px 2px rgba(0, 0, 0, .02), 0 4px 20px rgba(0, 0, 0, .05);
    box-sizing: border-box;
    display: flex;
    gap: 32px;
    height: 76px;
    max-width: 1200px;
    padding: 0 16px 0 22px;
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
    gap: 40px;
    justify-content: flex-end;
  }

  @media (max-width: 960px) {
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
    padding: 12px 8px;
    position: fixed;
    top: unset;

    &__wrapper {
      border-radius: var(--radius-md);
      box-shadow: 0 -2px 2px rgba(0, 0, 0, .02), 0 -4px 20px rgba(0, 0, 0, .05);
      height: 80px;
      padding: 0 12px;
    }

    &__nav {
      gap: 8px;
    }

    &__logo, &__logo-link, &__theme-switcher-wrapper {
      display: none;
    }
  }
}
</style>