<script setup lang="ts">
</script>

<template>
  <div class="home-hero">
    <div class="home-hero__wrapper">
      <div class="home-hero__cover home-hero__cover--color" />
      <div class="home-hero__cover home-hero__cover--blur" />
      <p
        v-for="(paragraph, index) in $tm('home.hero.paragraphs')"
        :key="index"
        class="home-hero__paragraph paragraph-lg"
        v-html="paragraph"
      />
    </div>
  </div>
</template>

<style lang="scss">
.home-hero {
  box-sizing: border-box;
  padding: 0 24px;
  width: 100%;

  $radius: 20px;

  &__wrapper {
    align-items: center;
    aspect-ratio: 16/9;
    background: center / cover no-repeat url("/images/hero-background.jpeg");
    border-radius: $radius;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 480px;
    max-height: 800px;
    overflow: hidden;
    padding: 0 64px;
    position: relative;
    width: 100%;
  }

  &__paragraph {
    color: var(--system-solid-800);
    position: relative;
    margin: 12px 0;
    max-width: 600px;
    width: 100%;

    & strong {
      color: var(--system-solid-800); // Fix to smooth the color transition when switching theme
      font-weight: 700;
    }
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
      border-radius: $radius;
      box-shadow: inset 0 0 0 1px var(--stroke-medium);
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
    }
  }
  
  @media (max-width: 680px) {
    padding: 16px 16px 0;

    &__wrapper {
      aspect-ratio: unset;
      padding: 32px 48px;
      max-height: unset;
    }
  }
}
</style>