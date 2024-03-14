<script setup lang="ts">
import SkillSlider from './childs/Skills/SkillSlider.vue'
import SkillCard from './childs/Skills/SkillCard.vue'
</script>

<template>
  <section class="skill-section">
    <skill-card title="Tata">
      <skill-slider label="Hello world!" />
    </skill-card>

    <skill-card title="Toto">
      <skill-slider label="Hello world!" />
    </skill-card>

    <skill-card title="Toutou">
      <skill-slider label="Hello world!" />
    </skill-card>

    <skill-card title="Titi">
      <skill-slider label="Hello world!" />
    </skill-card>
  </section>
</template>

<style lang="scss">
.skill-section {
  box-sizing: border-box;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  max-width: 1200px;
  padding: 24px 40px 0;
  width: 100%;

  @media (max-width: 960px) {
    gap: 24px;
  }

  @media (max-width: 680px) {
    gap: 16px;
  }
}
</style>