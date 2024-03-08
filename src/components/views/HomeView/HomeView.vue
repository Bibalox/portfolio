<script setup lang="ts">
import HomeHero from './childs/HomeHero.vue'
import HomeLink from './childs/HomeLink.vue'
</script>

<template>
  <main class="home-view">
    <home-hero />
    <section class="home-view__section">
      <h2 class="home-view__title title-lg" v-text="$t('home.bio.title')" />
      <div class="home-view__bio">
        <p
          v-for="(paragraph, index) in $tm('home.bio.paragraphs')"
          :key="index"
          class="home-view__paragraph paragraph-md"
          v-html="paragraph"
        />
      </div>
      <h2 class="home-view__title title-lg" v-text="$t('home.links.title')" />
      <div class="home-view__links">
        <home-link />
        <home-link />
        <home-link />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.home-view {
  &__section {
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 40px;
    width: 100%;
  }

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
    display: flex;
    gap: 24px;
    margin-top: 40px;
  }

  @media (max-width: 960px) {
    &__section {
      padding: 0;
      width: 600px;
    }

    &__title {
      margin: 64px 0 0;
    }
  }

  @media (max-width: 680px) {
    &__section {
      padding: 0 32px;
      width: 100%;
    }

    &__title {
      margin: 48px 0 0;
    }
  }
}
</style>