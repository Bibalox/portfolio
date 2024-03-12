<script setup lang="ts">
import ArticleHeader from '@common/ArticleHeader/ArticleHeader.vue'
import MainButton from '@common/MainButton/MainButton.vue'

const references = ['bee-buzziness', 'france-bureau', 'radio-france']
</script>

<template>
  <article
    v-for="(reference, index) in references"
    :key="index"
    class="reference-link"
  >
    <div class="reference-link__card">
      <img class="reference-link__thumbnail" :src="`/references/${reference}/thumbnail.jpg`" />
      <div class="reference-link__details">
        <article-header
          size="md"
          :title="$t(`references.values.${reference}.title`)"
          :subtitle="$t(`references.values.${reference}.subtitle`)"
        />
        <p class="reference-link__summary paragraph-sm" v-text="$t(`references.values.${reference}.summary`)" />
        <main-button :label="$t('references.buttonLabel')" :to="`/references/${reference}`" />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.reference-link {
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 40px 0;

  &__card {
    background-color: var(--background-secondary);
    border: 1px solid var(--stroke-medium);
    border-radius: 16px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding: 8px;
  }

  &__thumbnail {
    border: 1px solid var(--system-alpha-200);
    border-radius: 8px;
    box-sizing: border-box;
    height: 320px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &__details {
    align-items: flex-end;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow: hidden;
    padding: 32px 40px 16px;
  }

  &__summary {
    color: var(--system-solid-700);
    display: -webkit-box;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 960px) {
    max-width: 880px;
    padding: 24px 40px 0;

    &__card {
      grid-template-columns: 1fr;
    }

    &__details {
      gap: 24px;
      padding: 24px 24px 20px;
    }
  }

  @media (max-width: 680px) {
    padding: 0 16px;

    &__details {
      gap: 16px;
      padding: 24px 16px 20px;
    }

    &__summary {
      -webkit-line-clamp: 3;
    }
  }
}
</style>