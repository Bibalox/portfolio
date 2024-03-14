<script setup lang="ts">
import BoardIcon from '@common/BoardIcon.vue'

defineProps<{
  size: 'sm' | 'lg'
  icon: string
  label: string
  to?: string
  weight?: string
}>()
</script>

<template>
  <a
    v-if="to" :href="to"
    :class="`key-point key-point--link key-point--${size} key-point--weight-${weight ?? 1}`"
  >
    <board-icon :id="icon" />
    <span class="key-point__label label-sm" v-text="label" />
  </a>
  <div v-else :class="`key-point key-point--${size} key-point--weight-${weight ?? 1}`">
    <board-icon :id="icon" />
    <span class="key-point__label label-sm" v-text="label" />
  </div>
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
    white-space: nowrap;
    width: 100%;
  }

  &--sm {
    color: var(--system-solid-700);
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  &--lg {
    color: var(--system-solid-800);
    gap: 16px;
    text-align: left;
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

  &--link:hover {
    --primary-stroke: var(--accent-solid-600);
    --secondary-stroke: var(--accent-solid-500);
    --background: var(--accent-alpha-200);

    color: var(--accent-solid-600);
    cursor: pointer;
  }
}
</style>