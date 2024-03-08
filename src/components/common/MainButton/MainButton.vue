<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <button class="main-button">
    <span class="main-button__label label-md" v-text="label" />
  </button>
</template>

<style lang="scss">
.main-button {
  align-items: center;
  background-color: transparent;
  border: 2px solid var(--accent-solid-600);
  border-radius: 9px;
  box-sizing: border-box;
  color: var(--accent-solid-600);
  display: flex;
  justify-content: center;
  height: 36px;
  padding: 10px;

  &__label {
    font-weight: 700;
  }
}
</style>