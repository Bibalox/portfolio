<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BoardIcon from '@common/BoardIcon.vue'

defineProps<{ id: string }>()
</script>

<template>
  <router-link
    :to="{ name: id }"
    :class="['app-header-link', { 'app-header-link--home' : id === 'home'}]"
    active-class="app-header-link--active"
  >
    <board-icon :id="`${id}-32`" class="app-header-link__icon" />
    <span class="app-header-link__label app-header-link__label--lg label-md" v-text="$t(`common.appHeader.${id}`)" />
    <span class="app-header-link__label app-header-link__label--sm label-xs" v-text="$t(`common.appHeader.${id}`)" />
    <hr class="app-header-link__decoration" />
  </router-link>
</template>

<style lang="scss">
.app-header-link {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 42px;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transition: color .3s;

  &__decoration {
    background-color: transparent;
    border: none;
    border-radius: var(--radius-xl);
    bottom: 0;
    height: 3px;
    margin: 0;
    position: absolute;
    transition: background-color .3s, transform .3s;
    transform: scaleX(.6);
    width: 34px;
  }

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

  &--active, &:hover {
    .app-header-link__decoration {
      background-color: var(--accent-solid-600);
      transform: scaleX(1);
    }

    .app-header-link__label {
      color: var(--accent-solid-600);
    }
  }

  @media (max-width: 680px) {
    flex: 1;
    flex-direction: column;
    gap: 6px;
    height: auto;
    padding: 2px 0 0;

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

    &__decoration {
      display: none;
    }

    &--home {
      display: flex;
    }

    &--active, &:hover {
      background-color: transparent;
      border-color: transparent;

      .app-header-link__icon {
        --primary-stroke: var(--accent-solid-600);
        --secondary-stroke: var(--accent-solid-500);
        --background: var(--accent-alpha-200);
      }

      .app-header-link__label {
        color: var(--accent-solid-600);
      }
    }
  }
}
</style>