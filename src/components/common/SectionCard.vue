<script setup lang="ts">
import ArticleHeader from '@common/ArticleHeader.vue'

defineProps<{ title: string }>()
</script>

<template>
  <article class="section-card">
    <article-header :title="title" size="sm" />
    <div class="section-card__content">
      <slot />
    </div>
  </article>
</template>

<style lang="scss">
.section-card {
  background-color: var(--background-secondary);
  border: 1px solid var(--stroke-soft);
  border-radius: var(--radius-md);
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  min-width: 360px;
  padding: 24px 32px 32px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 680px) {
    min-width: unset;
  }
}
</style>