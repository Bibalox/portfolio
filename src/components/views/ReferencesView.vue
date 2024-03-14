<script setup lang="ts">
import ArticleHeader from '@common/ArticleHeader.vue'
import MainButton from '@common/MainButton.vue'
import ReferencesTimeline from './childs/References/ReferencesTimeline.vue'

const references = [{
  id: 'bee-buzziness',
  year: '2017'
}, {
  id: 'france-bureau',
  year: '2015'
}, {
  id: 'radio-france'
}]

const getJunctionType = (index: number, size: number) => {
  if (index === 0) return 'start-junction'
  else if (index === size - 1) return 'end-junction'
  else return 'middle-junction'
}
</script>

<template>
  <section class="reference-links">
    <template v-for="(reference, index) in references" :key="index">
      <div class="reference-links__article">
        <references-timeline :type="getJunctionType(index, references.length)" />
        <div class="reference-links__card">
          <router-link :to="`/references/${reference.id}`" class="reference-links__thumbnail-wrapper">
            <img class="reference-links__thumbnail" :src="`/images/${reference.id}/thumbnail.jpg`" />
          </router-link>
          <div class="reference-links__details">
            <article-header
              size="md"
              :title="$t(`references.data.${reference.id}.title`)"
              :subtitle="$t(`references.data.${reference.id}.subtitle`)"
            />
            <p class="reference-links__summary paragraph-sm" v-text="$t(`references.data.${reference.id}.paragraphs[0]`)" />
            <main-button :label="$t('references.buttonLabels.next')" :to="`/references/${reference.id}`" />
          </div>
        </div>
      </div>
      <references-timeline
        v-if="reference.year"
        type="timestamp"
        :label="reference.year"
      />
    </template>
  </section>
</template>

<style lang="scss">
.reference-links {
  box-sizing: border-box;
  max-width: 1200px;
  padding: 16px 40px 0;

  &__article {
    display: flex;
  }

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

  &__thumbnail-wrapper {
    border: 1px solid var(--system-alpha-200);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    height: 320px;
    overflow: hidden;
    transition: transform .2s;
  
    @media (hover: hover) {
      &:hover {
        transform: translateY(-3px);
      }
    }
  }

  &__thumbnail {
    height: 100%;
    object-fit: cover;
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
    padding: 24px 16px 0;

    &__details {
      gap: 16px;
      padding: 24px 16px 20px;
    }

    &__thumbnail-wrapper {
      height: 216px;
    }

    &__summary {
      -webkit-line-clamp: 3;
    }
  }
}
</style>