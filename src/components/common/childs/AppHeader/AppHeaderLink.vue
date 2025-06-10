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

  &--active, &:hover {
    background-color: var(--accent-alpha-200);
    border-color: var(--accent-alpha-100);

    .app-header-link__label {
      color: var(--accent-solid-600);
    }
  }

  @media (max-width: 680px) {
    flex: 1;
    flex-direction: column;
    gap: 8px;
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