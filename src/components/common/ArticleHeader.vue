<script setup lang="ts">
defineProps<{
  size: 'sm' | 'md' | 'lg'
  title: string
  subtitle?: string
}>()

const textSizes = {
  'sm': 'title-sm',
  'md': 'title-md',
  'lg': 'label-lg'
}
</script>

<template>
  <header :class="`article-header article-header--${size}`">
    <hr :class="`article-header__decoration article-header__decoration--${size}`" />
    <div class="article-header__texts">
      <h2
        :class="[
          'article-header__title',
          textSizes[size]
        ]"
        v-text="title"
      />
      <span
        v-if="size !== 'sm'"
        :class="[
          'article-header__subtitle',
          textSizes[size]
        ]"
        v-text="subtitle"
      />
    </div>
  </header>
</template>

<style lang="scss">
.article-header {
  display: flex;
  gap: 12px;
  width: 100%;

  &__decoration {
    background-color: var(--accent-solid-600);
    border: none;
    border-radius: 2px;
    flex-shrink: 0;
    margin: 0;
    width: 3px;

    &--sm {
      margin: 4px 0;
    }
  }

  &__texts {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &__title {
    color: var(--system-solid-800);
    margin: 0;
  }

  &__subtitle {
    color: var(--system-solid-500);
    margin: 0 0 2px;
  }

  &--md &__title, &--md &__subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &--lg {
    gap: 20px;
  } 
}
</style>
