<script setup lang="ts">
import ReferenceButton from './ReferenceButton.vue'

defineEmits(['next', 'prev'])
</script>

<template>
  <div class="reference-toolbox reference-toolbox--back-button">
    <div class="reference-toolbox__background" />
    <reference-button
      icon="arrow-left-24" :label="$t('references.buttonLabels.back')"
      to="/references"
    />
  </div>

  <div class="reference-toolbox reference-toolbox--navigation">
    <div class="reference-toolbox__background" />
    <reference-button icon="chevron-left-24" @click="$emit('prev')" />
    <reference-button icon="chevron-right-24" @click="$emit('next')" />
  </div>
</template>

<style lang="scss">
.reference-toolbox {
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


  &__background {
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
    &--back-button {
      top: 8px;
      left: 8px;
    }

    &--navigation {
      bottom: 16px;
    }
  }
}
</style>