<script setup lang="ts">
import MainButton from '@common/MainButton/MainButton.vue';
</script>

<template>
  <div class="home-link">
    <span class="label-md">Toto tata</span>
    <main-button label="tata" />
  </div>
</template>

<style lang="scss">
.home-link {
  align-items: center;
  background-color: var(--background-secondary);
  border: 1px solid var(--stroke-medium);
  border-radius: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  padding: 40px;
}
</style>