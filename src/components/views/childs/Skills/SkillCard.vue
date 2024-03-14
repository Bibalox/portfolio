<script setup lang="ts">
import ArticleHeader from '@common/ArticleHeader.vue'

defineProps<{ title: string }>()
</script>

<template>
  <article class="skill-card">
    <article-header :title="title" size="sm" />
    <div class="skill-card__content">
      <slot />
    </div>
  </article>
</template>

<style lang="scss">
.skill-card {
  background-color: var(--background-secondary);
  border: 1px solid var(--stroke-medium);
  border-radius: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 32px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>