<script setup lang="ts">
</script>

<template>
  <div class="skills-hero">
    <div class="skills-hero__cover skills-hero__cover--color" />
    <div class="skills-hero__cover skills-hero__cover--blur" />
    <span>Hello world!</span>
  </div>
</template>

<style lang="scss">
.skills-hero {
  $default-radius: 16px;

  align-items: center;
  background: center / cover no-repeat url("/backgrounds/skills-hero.jpeg");
  border-radius: $default-radius;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 256px;
  justify-content: center;
  overflow: hidden;
  padding: 0 64px;
  position: relative;
  width: 100%;

  &__title {
    color: var(--system-solid-800);
    position: relative;
    margin: 12px 0;
    max-width: 600px;
    width: 100%;
  }

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
      border-radius: $default-radius;
      box-shadow: inset 0 0 0 1px var(--stroke-medium);
      -webkit-backdrop-filter: blur(4px);
      backdrop-filter: blur(4px);
    }
  }
  
  @media (max-width: 680px) {
    $small-radius: 14px;

    border-radius: $small-radius;
    gap: 48px;
    height: 512px;

    &__cover--blur {
      border-radius: $small-radius;
    }
  }
}
</style>