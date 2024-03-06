<script setup lang="ts">
const props = defineProps<{
  id: string
}>()

const size = props.id.split('-').slice(-1)
</script>

<template>
  <svg :class="`board-icon board-icon--${size.toString()}`">
    <use :href="`#${id}`" />
  </svg>
</template>

<style lang="scss">
.board-icon {
  flex-shrink: 0;

  &--24 {
    height: 24px;
    width: 24px;
  }

  &--32 {
    height: 32px;
    width: 32px;
  }

  &--40 {
    height: 40px;
    width: 40px;
  }

  &--80 {
    height: 40px;
    width: 40px;
  }
}
</style>