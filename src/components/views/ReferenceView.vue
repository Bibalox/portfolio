<script setup lang="ts">
import ReferenceCarousel from './childs/Reference/ReferenceCarousel.vue'
import ArticleHeader from '@common/ArticleHeader.vue'
</script>

<template>
  <reference-carousel :id="$route.params.id" />
  <section class="reference-section">
    <article-header
      size="lg"
      :title="$t(`references.data.${$route.params.id}.title`)"
      :subtitle="$t(`references.data.${$route.params.id}.subtitle`)"
    />
    <div class="reference-section__paragraph-wrapper">
      <p
        v-for="(paragraph, index) in $tm(`references.data.${$route.params.id}.paragraphs`)"
        :key="index"
        class="reference-section__paragraph paragraph-md"
        v-text="paragraph"
      />
    </div>
  </section>
</template>

<style lang="scss">
.reference-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;

  &__paragraph-wrapper {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  &__paragraph {
    color: var(--system-solid-700);
    margin: 0;
  }

  @media (max-width: 960px) {
    gap: 24px;
  }

  @media (max-width: 960px) {
    box-sizing: border-box;
    gap: 16px;
    padding: 0 24px;
    width: 100%;
  }
}
</style>