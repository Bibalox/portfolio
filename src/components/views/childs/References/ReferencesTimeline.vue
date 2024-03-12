<script setup lang="ts">
defineProps<{
  type: 'timestamp' | 'start-junction' | 'middle-junction' | 'end-junction'
  label?: string
}>()
</script>

<template>
  <div :class="`references-timeline references-timeline--${type}`">
    <hr class="references-timeline__rail" />
    <svg
      class="references-timeline__bullet"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
    >
      <circle
        cx="8" cy="8"
        :r="type === 'timestamp' ? '6' : '7'"
        fill="var(--background-primary)"
        :stroke="type === 'timestamp' ? 'var(--accent-solid-600' : 'var(--system-solid-300)'"
        stroke-width="2"
      />
    </svg>
    <span
      v-if="label"
      class="references-timeline__label label-md"
      v-text="label"
    />
  </div>
</template>

<style lang="scss">
.references-timeline {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  min-width: 40px;
  position: relative;

  &__bullet {
    height: 16px;
    position: relative;
    width: 16px;
  }

  &__label {
    color: var(--accent-solid-600);
    font-weight: 700;
  }

  &__rail {
    background: var(--system-solid-300);
    border: none;
    height: 100%;
    left: 7px;
    margin: 0;
    position: absolute;
    width: 2px;
  }

  &--timestamp {
    gap: 8px;
    height: 56px;
  }

  &--start-junction &__rail {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--system-solid-300) 25%);
  }

  &--end-junction &__rail {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, var(--system-solid-300) 25%);
  }
}
</style>