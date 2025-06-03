<script setup lang="ts">
import ContactMap from './childs/World/ContactMap.vue'
import SectionCard from '@common/SectionCard.vue'
import KeyPoint from '@common/KeyPoint.vue'
</script>

<template>
  <section class="world-section">
    <section-card :title="$t('world.creative.title')">
      <div class="world-section__paragraph-wrapper">
        <p
          v-for="(paragraph, index) in $tm(`world.creative.paragraphs`)"
          :key="index"
          class="world-section__paragraph paragraph-sm"
          v-text="paragraph"
        />
      </div>
      <div class="world-section__link-group">
        <key-point
          icon="instagram-32"
          :label="$t('world.creative.links.instagram')"
          size="lg"
          to="https://www.instagram.com/_project67_/"
        />
        <key-point
          icon="medium-32"
          :label="$t('world.creative.links.medium')"
          size="lg"
          to="https://medium.com/@project67"
        />
      </div>
    </section-card>

    <section-card :title="$t('world.technical.title')">
      <div class="world-section__paragraph-wrapper">
        <p
          v-for="(paragraph, index) in $tm(`world.technical.paragraphs`)"
          :key="index"
          class="world-section__paragraph paragraph-sm"
          v-text="paragraph"
        />
      </div>
      <div class="world-section__link-group">
        <key-point
          icon="github-32"
          :label="$t('world.technical.links.github')"
          size="lg"
          to="https://github.com/Bibalox"
        />
      </div>
    </section-card>
     
    <img
      class="world-section__profile-picture"
      src="/profile-picture.jpg"
      :alt="$t('world.profilePicture.alt')"
    />
    
    <contact-map />
  </section>
</template>

<style lang="scss">
.world-section {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  max-width: 1200px;
  padding: 24px 40px 0;
  width: 100%;

  &__paragraph-wrapper {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  &__paragraph {
    color: var(--system-solid-700);
    margin: 0;
  }

  &__link-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 4px 0;


    @media (max-width: 680px) {
      gap: 16px;
    }
  }

  &__profile-picture {
    aspect-ratio: 1;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 16px;
    flex: 1;
    min-width: 360px;
    width: 100%;

    @media (max-width: 680px) {
      min-width: unset;
    }
  }

  @media (max-width: 960px) {
    gap: 24px;
    padding: 16px 40px 0;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 16px 0;
  }
}
</style>