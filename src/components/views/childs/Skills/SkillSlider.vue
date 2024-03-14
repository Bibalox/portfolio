<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="skill-slider">
    <div class="skill-bar" />
    <span class="skill-slider__label label-sm" v-text="label" />
  </div>
</template>

<style lang="scss">
.skill-slider {
  display: flex;
}
</style>