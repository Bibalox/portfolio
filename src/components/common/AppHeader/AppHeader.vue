<script setup lang="ts">
import BoardIcon from '@common/BoardIcon/BoardIcon.vue';
</script>

<template>
  <header class="appHeader">
    <svg class="appHeader__logo">
      <use href="#logo-full" />
    </svg>
    <board-icon id="contact-32" class="toto" />
    <board-icon id="telephone-40" class="toto" />
  </header>
</template>

<style lang="scss">
.appHeader {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  &__logo {
    --text: var(--system-solid-800);
    --symbol: var(--accent-solid-600);

    height: 32px;
    width: 224px;
  } 
}
.toto {
  --primary-stroke: coral;
  --secondary-stroke: green;
  --background: blue;
}
</style>