<script setup lang="ts">
defineProps<{
  label: string
  percentage: number
}>()

const animationDuration = Math.random() * 2 + 2
</script>

<template>
  <div class="skill-slider">
    <div class="skill-slider__bar" :style="`width: ${percentage}%; --animation-duration: ${animationDuration}s`" />
    <span class="skill-slider__label label-sm" v-text="label" />
  </div>
</template>

<style lang="scss">
.skill-slider {
  align-items: center;
  background-color: var(--system-alpha-100);
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 0 16px;
  position: relative;

  &__bar {
    animation: grow var(--animation-duration) .2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    background-color: var(--system-alpha-200);
    height: 100%;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: left;
    width: 50%;

    @keyframes grow {
      to { transform: scaleX(1); }
    }
  }

  &__label {
    color: var(--system-solid-800);
    font-weight: 600;
    position: relative;
  }
}
</style>