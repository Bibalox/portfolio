<script setup lang="ts">

</script>

<template>
  <section class="reference-carousel">
    <span>Hello world!</span>
  </section>
</template>

<style lang="scss">
.reference-carousel {
  background-color: var(--system-alpha-100);
  display: flex;
  margin-bottom: 56px;
  width: 100%;

  @media (max-width: 960px) {
    margin-bottom: 48px;
  }

  @media (max-width: 960px) {
    margin-bottom: 32px;
  }
}
</style>