<script setup lang="ts">
import { reactive } from 'vue'

defineProps<{ id: string | string[] }>()

const slides = reactive([4, 5, 1, 2, 3])

const next = () => {
  const firstSlide = slides.shift()
  if (firstSlide) slides.push(firstSlide)
}

const prev = () => {
  const lastSlide = slides.pop()
  if (lastSlide) slides.unshift(lastSlide)
}
</script>

<template>
  <section class="reference-carousel">
    <div class="reference-carousel__wrapper">
      <transition-group
        v-for="slide in slides" :key="slide"
        name="slide"
      >
        <img
          :key="slide" :src="`/images/${id}/0${slide}.jpg`"
          class="reference-carousel__image"
        />
      </transition-group>
    </div>
    <div class="toto__toolbox">
      <button @click="prev">
        prev
      </button>
      <button @click="next">
        next
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.reference-carousel {
  background-color: var(--system-alpha-200);
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
  position: relative;
  user-select: none;
  width: 100%;

  &__wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 960px;
    overflow: hidden;
    width: 100%;

    & .slide-move {
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

.toto {
  &__toolbox {
    background: coral;
    padding: 4px 6px;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 24px;
  }
}
</style>