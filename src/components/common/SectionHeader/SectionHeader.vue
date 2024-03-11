<script setup lang="ts">
defineProps<{
  size: 'sm' | 'md' | 'lg'
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header :class="`section-header section-header--${size}`">
    <hr class="section-header__decoration" />
    <div class="section-header__texts">
      <h2
        :class="[
          'section-header__title',
          size === 'lg' ? 'title-md' : 'label-lg'
        ]"
        v-text="title"
      />
      <span
        v-if="size !== 'sm'"
        :class="[
          'section-header__subtitle',
          size === 'lg' ? 'label-lg' : 'label-md'
        ]"
        v-text="subtitle"
      />
    </div>
  </header>
</template>

<style lang="scss">
.section-header {
  display: flex;
  gap: 12px;

  &__decoration {
    background-color: var(--accent-solid-600);
    border: none;
    border-radius: 2px;
    flex-shrink: 0;
    margin: 0;
    width: 3px;
  }

  &__title {
    color: var(--system-solid-800);
    margin: 0;
  }

  &__subtitle {
    color: var(--system-solid-500);
    margin: 0 0 2px;
  }

  &--md &__texts {
    overflow: hidden;
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
