<script setup lang="ts">
interface Props {
  label: string
  to: string
  type?: 'link' | 'file'
}

withDefaults(defineProps<Props>(), {
  type: 'link'
})
</script>

<template>
  <router-link
    v-if="type === 'link'" :to="to"
    class="main-button"
  >
    <span class="main-button__label label-md" v-text="label" />
  </router-link>
  <a
    v-else
    :href="to" target="_blank"
    class="main-button"
  >
    <span class="main-button__label label-md" v-text="label" />
  </a>
</template>

<style lang="scss">
.main-button {
  align-items: center;
  border: 2px solid var(--accent-solid-600);
  border-radius: 9px;
  box-sizing: border-box;
  color: var(--accent-solid-600);
  display: flex;
  height: 36px;
  justify-content: center;
  padding: 10px;
  text-decoration: none;
  transition: background-color .2s, transform .2s;

  &__label {
    font-weight: 700;
  }

  &:hover {
    background-color: var(--accent-solid-600);
    color: var(--system-solid-100);
    transform: translateY(-2px);
  }
}
</style>