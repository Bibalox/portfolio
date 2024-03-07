<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BoardIcon from '@common/BoardIcon/BoardIcon.vue'
    
defineProps<{ id: string }>()

interface Route {
  to: string
  icon: string
  label: string
}

const routes: { [key: string]: Route } = {
  home: {
    to: '/',
    icon: 'logo-32',
    label: 'Accueil'
  },
  references: {
    to: '/references',
    icon: 'references-32',
    label: 'Références'
  },
  skills: {
    to: '/skills',
    icon: 'skills-32',
    label: 'Compétences'
  },
  contact: {
    to: '/contact',
    icon: 'contact-32',
    label: 'Contact'
  }
}
</script>

<template>
  <router-link
    :to="routes[id].to"
    :class="[
      'app-header-link',
      { 'app-header-link--home' : routes[id].to === '/'}
    ]"
  >
    <board-icon :id="routes[id].icon" class="app-header-link__icon" />
    <span class="app-header-link__label app-header-link__label--lg label-md" v-text="routes[id].label" />
    <span class="app-header-link__label app-header-link__label--sm label-xs" v-text="routes[id].label" />
  </router-link>
</template>

<style lang="scss">
.app-header-link {
  align-items: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  height: 40px;
  padding: 0 15px;
  text-decoration: none;
  transition: background-color .3s, border-color .3s;

  &__icon {
    display: none;
  }

  &__label {
    color: var(--system-solid-800);
    font-weight: 700;
    transition: color .3s;
    
    &--sm {
      display: none;
    }
  }

  &--home {
    display: none;
  }

  &.router-link-active, &:hover {
    background-color: var(--accent-alpha-200);
    border-color: var(--accent-alpha-100);

    & .app-header-link__label {
      color: var(--accent-solid-600);
    }
  }

  @media (max-width: 680px) {
    flex: 1;
    flex-direction: column;
    gap: 8px;

    &__icon {
      --primary-stroke: var(--system-solid-700);
      --secondary-stroke: var(--system-solid-600);
      --background: var(--system-alpha-300);

      display: block;
    }

    &__label {
      &--lg {
        display: none;
      }

      &--sm {
        color: var(--system-solid-700);
        display: block;
      }
    }

    &--home {
      display: flex;
    }

    &.router-link-active, &:hover {
      background-color: transparent;
      border-color: transparent;

      .app-header-link__icon {
        --primary-stroke: var(--accent-solid-600);
        --secondary-stroke: var(--accent-solid-500);
        --background: var(--accent-alpha-200);
      }

      & .app-header-link__label {
        color: var(--accent-solid-600);
      }
    }
  }
}
</style>