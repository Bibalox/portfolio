<script setup lang="ts">
import BoardIcon from '@common/BoardIcon/BoardIcon.vue'

interface Props {
  size: 'sm' | 'lg'
  icon: string
  label: string
  to: string
  weight?: string
}

withDefaults(defineProps<Props>(), { weight: '1' })
</script>

<template>
  <a :href="to" :class="`key-point key-point--${size} key-point--weight-${weight}`">
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
  display: flex;
  font-weight: 600;
  overflow: hidden;
  text-decoration: none;
  transition: color .2s ease-in-out;
  
  &__label {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
    width: 100%;
  }

  &--sm {
    color: var(--system-solid-700);
    flex-direction: column;
    gap: 12px;
  }

  &--lg {
    color: var(--system-solid-800);
    gap: 16px;
  }

  &--weight-1 {
    flex: 1;
  }

  &--weight-2 {
    flex: 2;
  }

  &--weight-3 {
    flex: 3;
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