<script setup lang="ts">
import KeyPoint from '@common/KeyPoint/KeyPoint.vue'
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

const bottomMessage = new Date().getFullYear() + ' - ' + i18n.t('common.appFooter.message')
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__top">
      <div class="app-footer__top-wrapper">
        <key-point
          icon="telephone-32"
          label="06 52 13 24 39"
          size="sm"
          to="tel:+33652132439"
          weight="2"
        />
        <hr class="app-footer__separator" />
        <key-point
          icon="email-32"
          label="jeanbaptiste.bal@gmail.com"
          size="sm"
          to="mailto:jeanbaptiste.bal@gmail.com"
          weight="3"
        />
        <hr class="app-footer__separator" />
        <key-point
          icon="location-32"
          label="Grenoble"
          size="sm"
          to="https://www.qwant.com/maps/#map=12.35/45.1831393/5.7477362"
          weight="2"
        />
      </div>
    </div>
    <div class="app-footer__bottom">
      <span class="label-xs" v-text="bottomMessage" />
    </div>
  </footer>
</template>

<style lang="scss">
.app-footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  gap: 40px;
  width: 100%;

  &__top {
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 40px;
    width: 100%;
  }

  &__top-wrapper {
    align-items: center;
    background-color: var(--background-secondary);
    border: 1px solid var(--stroke-medium);
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
    gap: 16px;
    padding: 20px;
    width: 100%;
  }

  &__separator {
    background-color: var(--stroke-medium);
    border: none;
    flex-shrink: 0;
    height: 32px;
    margin: 0;
    width: 1px;
  }

  &__bottom {
    align-items: center;
    background-color: var(--background-secondary);
    border-top: 1px solid var(--stroke-medium);
    box-sizing: border-box;
    color: var(--system-solid-600);
    display: flex;
    justify-content: center;
    padding: 8px 16px;
    width: 100%;
  }

  @media (max-width: 960px) {
    gap: 24px;
    margin-top: 48px;
  }

  @media (max-width: 680px) {
    margin-top: 40px;

    &__top {
      display: none;
    }

  }
}
</style>