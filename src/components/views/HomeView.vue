<script setup lang="ts">
import HomeHero from './childs/Home/HomeHero.vue'
import HomeLink from './childs/Home/HomeLink.vue'

const links = ['references', 'skills', 'world']
</script>

<template>
  <home-hero />
  <section class="home-section">
    <h2 class="home-section__title title-lg" v-text="$t('home.bio.title')" />
    <div class="home-section__bio">
      <p
        v-for="(paragraph, index) in $tm('home.bio.paragraphs')"
        :key="index"
        class="home-section__paragraph paragraph-md"
        v-html="paragraph"
      />
    </div>
  </section>
  <section class="home-section">
    <h2 class="home-section__title title-lg" v-text="$t('home.links.title')" />
    <div class="home-section__links">
      <home-link
        v-for="(link, index) in links"
        :key="index"
        :icon="`${link}-80`"
        :title="$t(`home.links.${link}.title`)"
        :description="$t(`home.links.${link}.description`)"
        :to="link"
      />
    </div>
  </section>
</template>

<style lang="scss">
.home-section {
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 40px;
  width: 100%;

  &__title {
    color: var(--system-solid-800);
    margin: 80px 0 8px;
    text-align: center;
  }

  &__bio {
    column-count: 2;
    column-width: 360px;
    gap: 96px;
  }

  &__paragraph {
    color: var(--system-solid-700);
    display: inline-block;
    margin: 40px 0 0;

    & strong {
      color: var(--system-solid-800);
    }
  }

  &__links {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
  }

  @media (max-width: 960px) {
    padding: 0;
    width: 600px;

    &__title {
      margin: 64px 0 0;
    }

    &__links {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 680px) {
    padding: 0 16px;
    width: 100%;

    &__title {
      margin: 48px 0 0;
    }
  }
}
</style>