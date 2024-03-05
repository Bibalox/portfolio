<script setup lang="ts">
const props = defineProps<{
  id: string
}>()

const size = props.id.split('-').slice(-1)
console.log(size)
</script>

<template>
  <svg :class="['CommonIcon', `CommonIcon--${size.toString()}`]">
    <use :href="`#${id}`" />
  </svg>
</template>

<style lang="scss">
.CommonIcon {
  --primary-stroke: red;
  --secondary-stroke: green;
  --background: blue;

  &--32 {
    height: 32px;
    width: 32px;
  }

  &--40 {
    height: 40px;
    width: 40px;
  }
}
</style>