<script setup lang="ts">
import BoardIcon from '@common/BoardIcon.vue'

defineProps<{
  icon: string
  active?: boolean
}>()

defineEmits(['click'])
</script>

<template>
  <button
    :class="[
      'theme-switcher-button',
      { 'theme-switcher-button--active' : active }
    ]"
    @click="$emit('click')"
  >
    <board-icon :id="icon" />
  </button>
</template>

<style lang="scss">
.theme-switcher-button {
  --primary-stroke: var(--accent-solid-500);

  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 18px;
  display: flex;
  height: 36px;
  justify-content: center;
  position: relative;
  transition: background-color .3s;
  width: 36px;

  &--active {
    --primary-stroke: var(--system-solid-100);
  }

  &:hover:not(&--active) {
    --primary-stroke: var(--accent-solid-600);

    background-color: var(--accent-alpha-300);
    cursor: pointer;
  }
}
</style>