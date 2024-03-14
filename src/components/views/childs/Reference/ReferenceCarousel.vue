<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import CarouselOverlay from './Carousel/CarouselOverlay.vue'

import type { Ref } from 'vue'


// Props & data

defineProps<{ id: string | string[] }>()

const carousel: Ref<HTMLBaseElement | null> = ref(null)
const slides = reactive([4, 5, 1, 2, 3])
const currentSlide = ref(1)


// Methods

const toNextSlide = () => {
  const firstSlide = slides.shift()
  if (firstSlide) slides.push(firstSlide)

  currentSlide.value = currentSlide.value === 5 ? 1 : currentSlide.value + 1
}

const toPrevSlide = () => {
  const lastSlide = slides.pop()
  if (lastSlide) slides.unshift(lastSlide)

  currentSlide.value = currentSlide.value === 1 ? 5 : currentSlide.value - 1
}


// Init

onMounted(() => {

  // Swipe while the pointer (mouse or touch) is moving
  const pointer = {
    start: 0,
    end: 0
  }

  carousel.value?.addEventListener('pointerdown', event => {
    pointer.start = event.clientX
  })

  carousel.value?.addEventListener('pointerup', event => {
    pointer.end = event.clientX
    if (pointer.end - pointer.start < -100) toNextSlide()
    else if (pointer.end - pointer.start > 100) toPrevSlide()
  }, true)


  // Prevent the scroll while swiping
  const touch = {
    start: 0,
    end: 0
  }

  carousel.value?.addEventListener('touchstart', event => {
    touch.start = event.touches[0].clientY
  })

  carousel.value?.addEventListener('touchmove', event => {
    touch.end = event.touches[0].clientY
    console.log(pointer.end - pointer.start)
    if (Math.abs(touch.end - touch.start) < 10) event.preventDefault()
  })
})
</script>

<template>
  <section ref="carousel" class="reference-carousel">
    <div class="reference-carousel__carousel">
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
      <carousel-overlay
        :active-bullet="currentSlide"
        @next="toNextSlide()"
        @prev="toPrevSlide()"
      />
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

  &__carousel {
    display: flex;
    max-width: 960px;
    position: relative;
    width: 100%;
  }

  &__slider {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  width: 100%;

    & .slider-move {
      transition: transform 0.3s;
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
</style>