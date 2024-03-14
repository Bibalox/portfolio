<script setup lang="ts">
import CarouselButton from './CarouselButton.vue'

defineEmits(['next', 'prev'])
</script>

<template>
  <div class="carousel-overlay">
    <div class="carousel-overlay__toolbox carousel-overlay__toolbox--back-button">
      <div class="carousel-overlay__toolbox-background" />
      <carousel-button
        icon="arrow-left-24" :label="$t('references.buttonLabels.back')"
        to="/references"
      />
    </div>

    <div class="carousel-overlay__toolbox carousel-overlay__toolbox--navigation">
      <div class="carousel-overlay__toolbox-background" />
      <carousel-button icon="chevron-left-24" @click="$emit('prev')" />
      <carousel-button icon="chevron-right-24" @click="$emit('next')" />
    </div>
  </div>
</template>

<style lang="scss">
.carousel-overlay {
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  
  &__toolbox {
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    display: flex;
    overflow: hidden;
    position: absolute;
    z-index: 2000;

    &--back-button {
      border-radius: 12px;
      top: 16px;
      left: 16px;
    }

    &--navigation {
      border-radius: 16px;
      bottom: 24px;
      box-sizing: border-box;
      justify-content: space-between;
      padding: 4px;
      width: 280px;
    }
  }

  &__toolbox-background {
    height: 100%;
    background-color: var(--background-primary);
    left: 0;
    opacity: .5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  @media (max-width: 960px) {

  }

  @media (max-width: 960px) {
    &__toolbox {
      &--back-button {
      top: 8px;
      left: 8px;
    }

      &--navigation {
        bottom: 16px;
      }
    }
  }
}
</style>./CarouselButton.vue