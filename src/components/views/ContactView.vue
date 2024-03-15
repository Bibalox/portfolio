<script setup lang="ts">
import ContactMap from './childs/Contact/ContactMap.vue'
import KeyPoint from '@common/KeyPoint.vue'
</script>

<template>
  <section class="contact-section">
    <div class="contact-section__cover" />
    <article class="contact-section__card">
      <contact-map />

      <hr class="contact-section__separator" />

      <section class="contact-section__sub-section contact-section__sub-section--column">
        <key-point
          icon="telephone-40"
          label="06 52 13 24 39"
          size="lg"
          to="tel:+33652132439"
        />
        <key-point
          icon="email-40"
          label="jeanbaptiste.bal@gmail.com"
          size="lg"
          to="mailto:jeanbaptiste.bal@gmail.com"
        />
      </section>

      <hr class="contact-section__separator" />

      <section class="contact-section__sub-section contact-section__sub-section--row">
        <key-point
          icon="instagram-32"
          label="Instagram"
          size="sm"
          to="https://www.instagram.com/_project67_/"
          target="_blank"
        />
        <key-point
          icon="medium-32"
          label="Medium"
          size="sm"
          to="https://medium.com/@project67"
          target="_blank"
        />
        <key-point
          icon="github-32"
          label="GitHub"
          size="sm"
          to="https://github.com/Bibalox"
          target="_blank"
        />
      </section>
    </article>
  </section>
</template>

<style lang="scss">
.contact-section {
  align-items: center;
  background: center / cover no-repeat url("/backgrounds/contact.jpeg");
  box-sizing: border-box;
  height: 100dvh;
  display: flex;
  justify-content: center;
  padding: calc(80px + 24px) 24px 24px;
  position: relative;
  width: 100%;

  &__cover {
    background-color: var(--cover-soft);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &__card {
    background-color: var(--background-secondary);
    border-radius: 18px;
    border: 1px var(--stroke-medium);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
    max-height: 560px;
    padding: 16px;
    position: relative;
    width: 100%;
    max-width: 400px;
  }

  &__sub-section {
    box-sizing: border-box;
    display: flex;
    gap: 16px;

    &--column {
      flex-direction: column;
      padding: 0 12px;
    }

    &--row {
      padding: 4px 0;
    }
  }

  &__separator {
    background-color: var(--stroke-medium);
    border: none;
    flex-shrink: 0;
    height: 1px;
    margin: 0 16px;
    width: calc(100% - 32px);
  }

  @media (max-width: 680px) {
    padding: 16px 16px calc(81px + 16px);
  }
}
</style>