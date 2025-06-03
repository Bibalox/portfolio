<script setup lang="ts">
import SkillsHero from './childs/Skills/SkillsHero.vue'
import SkillSlider from './childs/Skills/SkillSlider.vue'
import SectionCard from '@common/SectionCard.vue'
import KeyPoint from '@common/KeyPoint.vue'

const strengths = ['team-work', 'discipline', 'optimization', 'problem-solving', 'smile']
</script>

<template>
  <section class="skill-section">
    <section-card :title="$t('skills.tools.title')">
      <div class="skill-section__content-group skill-section__content-group--sliders">
        <skill-slider :label="$t('skills.tools.list.figma')" :percentage="100" />
        <skill-slider :label="$t('skills.tools.list.sketch')" :percentage="90" />
      </div>
      <div class="skill-section__content-group skill-section__content-group--sliders">
        <skill-slider :label="$t('skills.tools.list.html')" :percentage="100" />
        <skill-slider :label="$t('skills.tools.list.vue')" :percentage="70" />
        <skill-slider :label="$t('skills.tools.list.typescript')" :percentage="40" />
      </div>
    </section-card>

    <section-card :title="$t('skills.strengths.title')">
      <div class="skill-section__content-group skill-section__content-group--strengths">
        <key-point
          v-for="strength in strengths" :key="strength"
          size="lg"
          :icon="`${strength}-40`"
          :label="$t(`skills.strengths.list.${strength}`)"
        />
      </div>
    </section-card>

    <section-card :title="$t('skills.languages.title')">
      <div class="skill-section__content-group skill-section__content-group--sliders">
        <skill-slider :label="$t('skills.languages.list.french')" :percentage="100" />
        <skill-slider :label="$t('skills.languages.list.english')" :percentage="90" />
      </div>
    </section-card>

    <section-card :title="$t('skills.diplomas.title')">
      <div class="skill-section__content-group skill-section__content-group--diplomas">
        <span
          v-for="diploma in $tm('skills.diplomas.list')" :key="diploma"
          class="skill-section__label label-sm" v-text="diploma"
        />
      </div>
    </section-card>
    <skills-hero />
  </section>
</template>

<style lang="scss">
.skill-section {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  max-width: 1200px;
  padding: 24px 40px 0;
  width: 100%;

  &__content-group {
    display: flex;
    flex-direction: column;

    &--sliders {
      gap: 16px;
    }

    &--strengths {
      margin: 4px 0;
      gap: 20px;
    }

    &--diplomas {
      margin: 1px 0;
      gap: 20px;
    }
  }

  &__label {
    color: var(--system-solid-800);
    font-weight: 600;
  }

  @media (max-width: 960px) {
    gap: 24px;
    padding: 16px 40px 0;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 16px 0;
  }
}
</style>