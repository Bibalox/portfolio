<script setup lang="ts">
import BoardIcon from '@common/BoardIcon/BoardIcon.vue'
import MainButton from '@common/MainButton/MainButton.vue'

defineProps<{
  icon: string,
  title: string,
  description: string
  to: string
}>()
</script>

<template>
  <div class="home-link">
    <board-icon :id="icon" class="home-link__icon" />
    <div class="home-link__texts">
      <h3 class="home-link__title title-sm" v-text="title" />
      <p class="home-link__description paragraph-xs" v-text="description" />
    </div>
    <main-button :to="to" :label="$t('home.links.buttonLabel')" />
  </div>
</template>

<style lang="scss">
.home-link {
  align-items: center;
  background-color: var(--background-secondary);
  border: 1px solid var(--stroke-medium);
  border-radius: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  padding: 40px;

  &__icon {
    --primary-stroke: var(--accent-solid-600);
    --secondary-stroke: var(--accent-solid-500);
    --background: var(--accent-alpha-200);

    flex-shrink: 0;
  }

  &__texts {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
    text-align: center;
  }

  &__title {
    color: var(--system-solid-800);
    margin: 0;
  }

  &__description {
    color: var(--system-solid-700);
    margin: 0;
  }

  @media (max-width: 960px) {
    flex-direction: row;
    padding: 32px 40px;
    gap: 40px;

    &__texts {
      text-align: left;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    padding: 32px;
    gap: 24px;

    &__texts {
      text-align: center;
    }
  }
}
</style>