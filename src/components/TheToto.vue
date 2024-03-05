<script setup lang="ts">
import CommonIcon from '@/components/common/CommonIcon.vue';
</script>

<template>
  <span class="test__toto title-lg">Hello world!</span>
  <common-icon id="telephone-32" />
  <common-icon id="telephone-40" class="tata" />
  <common-icon id="discipline-40" />
  <svg class="titi">
    <use href="#logo-compact" />
  </svg>
</template>

<style lang="scss">
.test {
  &__toto {
    color: var(--accent-solid-600);
  }
}

.tata {
  --background: coral;
}

.titi {
  --text: black;
  --symbol: coral;

  height: 32px;
  width: 107px;
}
</style>