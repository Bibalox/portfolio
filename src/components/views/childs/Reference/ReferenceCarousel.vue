<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import CarouselOverlay from './Carousel/CarouselOverlay.vue'

import type { Ref } from 'vue'


// Props & data

defineProps<{ id: string | string[] }>()

const wrapper: Ref<HTMLBaseElement | null> = ref(null)
const slides = reactive([4, 5, 1, 2, 3])


// Methods

const toNextSlide = () => {
  const firstSlide = slides.shift()
  if (firstSlide) slides.push(firstSlide)
}

const toPrevSlide = () => {
  const lastSlide = slides.pop()
  if (lastSlide) slides.unshift(lastSlide)
}


// Init

onMounted(() => {
  let touchstart: number
  let touchend: number
  
  wrapper.value?.addEventListener('pointerdown', function (event) {
    touchstart = event.clientX
  }, false)

  wrapper.value?.addEventListener('pointerup', function (event) {
    event.preventDefault()
    touchend = event.clientX
    if (touchend < touchstart) toNextSlide()
    else if (touchend > touchstart) toPrevSlide()
  }, false)
})
</script>

<template>
  <section class="reference-carousel">
    <div ref="wrapper" class="reference-carousel__wrapper">
      <transition-group
        name="slider"
        class="reference-carousel__slider" tag="div"
      >
        <img
          v-for="slide in slides" :key="slide"
          :src="`/images/${id}/0${slide}.jpg`"
          class="reference-carousel__image"
        />
      </transition-group>
      <carousel-overlay @next="toNextSlide()" @prev="toPrevSlide()" />
    </div>
  </section>
</template>

<style lang="scss">
.reference-carousel {
  background-color: var(--system-alpha-200);
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
  -webkit-user-select: none;
  user-select: none;
  width: 100%;

  &__wrapper {
    display: flex;
    max-width: 960px;
    position: relative;
    width: 100%;
  }

  &__slider {
  align-items: center;
  cursor: grab;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  width: 100%;

    & .slider-move {
      transition: transform 0.3s;
    }

    &:active {
      cursor: grabbing;
    }
  }

  &__image {
    aspect-ratio: 16 / 10;
    display: flex;
    object-fit: cover;
    pointer-events: none;
    width: 100%;
    
    &:first-child, &:last-child {
      visibility: hidden;
    }
  }

  @media (max-width: 960px) {
    margin-bottom: 48px;
  }

  @media (max-width: 960px) {
    margin-bottom: 32px;
  }
}
</style>./ReferenceToolbox.vue./ReferenceOverlay.vue