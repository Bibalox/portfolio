<script setup lang="ts">
import BoardIcon from '@common/BoardIcon/BoardIcon.vue'
import { RouterLink } from 'vue-router'

defineProps<{
  to: string
}>()
</script>

<template>
  <router-link :to="to">
    <board-icon id="contact-32" class="toto" />
    <board-icon id="telephone-40" class="toto" />
    <span>
      Coucou
    </span>
  </router-link>
</template>

<style lang="scss">
.toto {
  --primary-stroke: coral;
  --secondary-stroke: green;
  --background: blue;
}
</style>