<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

import type { Ref } from 'vue'

const props = defineProps<{
  id: string | string[]
  amount: number
}>()

// Data

const data = reactive({
  slides: [1, 2, 3, 4],
  innerStyles: {},
  step: '',
  transitioning: false
})

const inner: Ref<HTMLDivElement | null> = ref(null)

// Methods 

const moveInner = (side: 'left' | 'right') => {
  data.innerStyles = { transform: `translateX(${side === 'left' ? '-' : ''}${data.step}) translateX(-${data.step})`}
}

const resetTranslate = () => {
  data.innerStyles = {
    transition: 'none',
    transform: `translateX(-${data.step})`
  }
}

const afterTransition = callback => {
  const listener = () => {
    callback()
    inner.value?.removeEventListener('transitionend', listener)
  }
  inner.value?.addEventListener('transitionend', listener)
}

const next = () => {
  if (data.transitioning) return
  data.transitioning = true

  moveInner('left')
  afterTransition(() => {
    const card = data.slides.shift()
    if (card) data.slides.push(card)
    resetTranslate()
    data.transitioning = false
  })
}

const prev = () => {
  if (data.transitioning) return
  data.transitioning = true

  moveInner('right')
  afterTransition(() => {
    const card = data.slides.pop()
    if (card) data.slides.unshift(card)
    resetTranslate()
    data.transitioning = false
  })
}


// Init

onMounted(() => {
  // Set the step size
  const innerWidth = inner.value?.scrollWidth ?? 960
  const slideQuantity = data.slides.length
  data.step = `${innerWidth / slideQuantity}px`

  // Reset the translation
  resetTranslate()
})
</script>

<template>
  <section class="reference-carousel">
    <div class="toto__carousel">
      <div
        ref="inner" class="toto__inner"
        :style="data.innerStyles"
      >
        <div 
          v-for="slide in data.slides" :key="slide"
          class="toto__slide"
        >
          <img
            class="toto__image"
            :src="`/images/${id}/0${slide}.jpg`"
          />
        </div>
      </div>
    </div>
    <button @click="prev">
      prev
    </button>
    <button @click="next">
      next
    </button>
  </section>
</template>

<style lang="scss">
.reference-carousel {
  background-color: var(--system-alpha-100);
  display: flex;
  margin-bottom: 56px;
  width: 100%;

  @media (max-width: 960px) {
    margin-bottom: 48px;
  }

  @media (max-width: 960px) {
    margin-bottom: 32px;
  }
}

.toto {
  &__carousel {
    width: 960px;
    overflow: hidden;
  }

  &__inner {
    display: flex;
    transition: transform .4s;
  }

  &__slide {
    display: flex;
    height: 590px;
    width: 960px;
    flex-shrink: 0;
  }

  &__image {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>