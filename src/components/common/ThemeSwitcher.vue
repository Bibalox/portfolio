<script setup lang="ts">
import { ref } from 'vue'
import { getUserTheme, setTheme } from '@utils/themes'
import ThemeSwitcherButton from './childs/ThemeSwitcher/ThemeSwitcherButton.vue'

const currentTheme = ref(getUserTheme())

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  localStorage.removeItem('jbbal-theme')
  currentTheme.value = getUserTheme()
  setTheme(currentTheme.value)
})

const updateTheme = (theme: 'dark' | 'light') => {
  localStorage.setItem('jbbal-theme', theme)
  currentTheme.value = theme
  setTheme(theme)
}
</script>

<template>
  <div class="theme-switcher">
    <div :class="`theme-switcher__active-marker theme-switcher__active-marker--${currentTheme}`" />
    <theme-switcher-button
      icon="sun-24"
      :active="currentTheme === 'light'"
      @click="updateTheme('light')"
    />
    <theme-switcher-button
      icon="moon-24"
      :active="currentTheme === 'dark'"
      @click="updateTheme('dark')"
    />
  </div>
</template>

<style lang="scss">
.theme-switcher {
  align-items: center;
  background-color: var(--accent-alpha-200);
  border: 1px solid var(--accent-alpha-100);
  border-radius: 22px;
  box-sizing: border-box;
  display: flex;
  gap: 4px;
  height: 44px;
  padding: 0 3px;
  position: relative;

  &__active-marker {
    background-color: var(--accent-solid-600);
    border-radius: 18px;
    height: 36px;
    width: 36px;
    position: absolute;
    transition: transform .3s;

    &--dark {
      transform: translateX(40px);
    } 
  }
}
</style>