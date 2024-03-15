<script setup lang="ts">
</script>

<template>
  <section class="contact-section">
    <div class="contact-section__cover contact-section__cover--blur" />
    <div class="contact-section__cover contact-section__cover--color" />
    <article class="contact__card">
      <span>Hello world!</span>
    </article>
  </section>
</template>

<style lang="scss">
.contact-section {
  background: center / cover no-repeat url("/backgrounds/contact.jpeg");
  height: 100dvh;
  position: relative;
  width: 100%;

  &__cover {
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;

    // Duplicating the layers avoid having blurry edges at certain sizes

    &--color {
      background-color: var(--cover-soft);
    }

    &--blur {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }
}
</style>