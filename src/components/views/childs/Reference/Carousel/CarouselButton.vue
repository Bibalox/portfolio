<script setup lang="ts">
import BoardIcon from '@common/BoardIcon.vue'

defineProps<{
  icon: string
  label?: string
  to?: string
}>()

defineEmits(['click'])
</script>

<template>
  <router-link
    v-if="to" :to="to"
    class="reference-button"
  >
    <board-icon :id="icon" />
    <span
      v-if="label" class="reference-button__label label-sm"
      v-text="label"
    />
  </router-link>
  <button
    v-else class="reference-button"
    @click="$emit('click')"
  >
    <board-icon :id="icon" />
    <span
      v-if="label" class="reference-button__label label-sm"
      v-text="label"
    />
  </button>
</template>

<style lang="scss">
.reference-button {
  --primary-stroke: var(--system-solid-900);

  align-items: center;
  background-color: var(--system-alpha-300);
  border: 1px solid var(--system-alpha-100);
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  height: 38px;
  padding: 0 11px;
  text-decoration: none;
  touch-action: manipulation;
  transition: background-color .2s;


  &__label {
    color: var(--system-solid-900);
    font-weight: 700;
  }

  &:hover {
    background-color: var(--system-alpha-400);
    cursor: pointer;
  }
}
</style>