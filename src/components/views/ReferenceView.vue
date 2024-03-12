<script setup lang="ts">
import ArticleHeader from '@common/ArticleHeader.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
</script>

<template>
  <section class="reference-section">
    <article-header
      size="lg"
      :title="$t(`references.data.${$route.params.id}.title`)"
      :subtitle="$t(`references.data.${$route.params.id}.subtitle`)"
    />
  </section>
</template>

<style lang="scss">
.reference-section {
  display: flex;
}
</style>