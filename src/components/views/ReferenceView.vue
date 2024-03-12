<script setup lang="ts">
import ArticleHeader from '@common/ArticleHeader.vue'

import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.params)
</script>

<template>
  <section class="reference-section">
    <article-header
      size="lg"
      :title="$t(`references.data.${$route.params.referenceId}.title`)"
      :subtitle="$t(`references.data.${$route.params.referenceId}.subtitle`)"
    />
  </section>
</template>

<style lang="scss">
.reference-section {
  display: flex;
}
</style>