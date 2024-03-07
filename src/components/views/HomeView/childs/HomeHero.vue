<script setup lang="ts">

</script>

<template>
  <div class="home-hero">
    <div class="home-hero__wrapper">
      <div class="home-hero__cover home-hero__cover--color" />
      <div class="home-hero__cover home-hero__cover--blur" />
      <p class="home-hero__paragraph" v-text="'Hello world!'" />
    </div>
  </div>
</template>

<style lang="scss">
.home-hero {
  margin: 0 24px;

  &__wrapper {
    align-items: center;
    aspect-ratio: 16/9;
    background: center / cover no-repeat url("/images/hero-background.jpeg");
    border-radius: 14px;
    display: flex;
    justify-content: center;
    min-height: 480px;
    max-height: 800px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  &__paragraph {
    color: var(--system-solid-800);
    position: relative;
    width: 600px;
  }

  &__cover {
    height: 100%;
    position: absolute;
    width: 100%;

    // Duplicating the layers avoid having blurry edges at certain sizes

    &--color {
      background-color: var(--cover-hard);
    }

    &--blur {
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
    }
  }
}
</style>