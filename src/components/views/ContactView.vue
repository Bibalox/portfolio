<script setup lang="ts">
import ContactMap from './childs/Contact/ContactMap.vue'
</script>

<template>
  <section class="contact-section">
    <div class="contact-section__cover" />
    <article class="contact-section__card">
      <contact-map />
    </article>
  </section>
</template>

<style lang="scss">
.contact-section {
  align-items: center;
  background: center / cover no-repeat url("/backgrounds/contact.jpeg");
  height: 100dvh;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  &__cover {
    background-color: var(--cover-soft);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &__card {
    display: flex;
    position: relative;
  }
}
</style>