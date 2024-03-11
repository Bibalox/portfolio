<script setup lang="ts">
import BoardIcon from '@common/BoardIcon/BoardIcon.vue'

defineProps<{
  size: 'sm' | 'lg'
  icon: string
  label: string
  to: string
}>()
</script>

<template>
  <a :class="`key-point key-point--${size}`" :href="to">
    <board-icon :id="icon" />
    <span class="key-point__label label-sm" v-text="label" />
  </a>
</template>

<style lang="scss">
.key-point {
  --primary-stroke: var(--accent-solid-500);
  --secondary-stroke: var(--accent-solid-400);
  --background: var(--accent-alpha-100);

  align-items: center;
  color: var(--system-solid-800);
  display: flex;
  font-weight: 600;
  overflow: hidden;
  text-decoration: none;
  transition: color .2s ease-in-out;
  
  &__label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &--sm {
    flex-direction: column;
    gap: 12px;
  }

  &--lg {
    gap: 16px;
  }

  &:hover {
    --primary-stroke: var(--accent-solid-600);
    --secondary-stroke: var(--accent-solid-500);
    --background: var(--accent-alpha-200);

    color: var(--accent-solid-600);
    cursor: pointer;
  }
}
</style>