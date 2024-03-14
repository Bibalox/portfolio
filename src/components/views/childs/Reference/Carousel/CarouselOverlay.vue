<script setup lang="ts">
import CarouselButton from './CarouselButton.vue'

defineProps<{ activeBullet: number }>()
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
      <div class="carousel-overlay__bullet-wrapper">
        <div
          v-for="bullet in 5" :key="bullet"
          :class="[
            'carousel-overlay__bullet',
            { 'carousel-overlay__bullet--active' : bullet === activeBullet }
          ]"
        />
      </div>
      <carousel-button icon="chevron-right-24" @click="$emit('next')" />
    </div>
  </div>
</template>

<style lang="scss">
.carousel-overlay {
  animation: firstAppearance 1.2s;
  cursor: grab;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  transition: opacity .2s 1s;
  width: 100%;
  
  &__toolbox {
    align-items: center;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    cursor: default;
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

  &__bullet-wrapper {
    display: flex;
    gap: 8px;
  }

  &__bullet {
    background-color: var(--system-alpha-400);
    border-radius: 4px;
    height: 8px;
    transition: background-color .2s;
    width: 8px;

    &--active {
      background-color: var(--system-solid-900);
    }
  }

  &:active {
    cursor: grabbing;
  }

  @media (hover: hover) {
    &:hover {
      transition: none;
      opacity: 1;
    }
  }

  @media (hover: none) {
    &:active {
      transition: none;
      opacity: 1;
    }
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
  
  @keyframes firstAppearance {
    0%, 95% { opacity: 1; }
    to { opacity: 0; }
  }
}
</style>