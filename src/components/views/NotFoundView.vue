<script setup lang="ts">
import MainButton from '@common/MainButton.vue'
</script>

<template>
  <section class="not-found-section">
    <div class="not-found-section__cover" />
    
    <article class="not-found-section__card">
      <div class="not-found-section__texts">
        <h1 class="not-found-section__title title-lg" v-text="$t('notFound.title')" />
        <p class="not-found-section__message paragraph-md" v-text="$t('notFound.message')" />
      </div>
      <main-button to="/" :label="$t('notFound.buttonLabel')"></main-button>
    </article>
  </section>
</template>

<style lang="scss">
.not-found-section {
  align-items: center;
  background: center / cover no-repeat url("/backgrounds/404.webp");
  box-sizing: border-box;
  height: 100dvh;
  display: flex;
  justify-content: center;
  padding: calc(80px + 24px) 24px 24px;
  position: relative;
  width: 100%;

  &__cover {
    background-color: var(--cover-soft);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &__card {
    align-items: center;
    background-color: var(--cover-soft);
    border-radius: 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 64px;
    height: 360px;
    justify-content: center;
    padding: 32px;
    position: relative;
    width: 100%;
    max-width: 400px;
  }

  &__texts {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 256px;

    & * {
      margin: 0;
    text-align: center;
    }
  }

  &__title {
    color: var(--system-solid-800);
  }

  &__message {
    color: var(--system-solid-700);
  }

  @media (max-width: 680px) {
    padding: 16px 16px calc(81px + 16px);
  }
}
</style>