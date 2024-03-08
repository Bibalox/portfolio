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
  height: 36px;
  justify-content: center;
  padding: 10px;
  transition: background-color .2s, transform .2s;

  &__label {
    font-weight: 700;
  }

  &:hover {
    background-color: var(--accent-solid-600);
    color: var(--system-solid-100);
    cursor: pointer;
    transform: translateY(-2px);
  }
}
</style>