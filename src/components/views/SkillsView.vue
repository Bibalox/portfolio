<script setup lang="ts">
import SkillSlider from './childs/Skills/SkillSlider.vue'
import SkillCard from './childs/Skills/SkillCard.vue'
import KeyPoint from '@common/KeyPoint.vue'

const strengths = ['team-work', 'discipline', 'optimization', 'problem-solving', 'smile']
</script>

<template>
  <section class="skill-section">
    <skill-card :title="$t('skills.tools.title')">
      <div class="skill-section__content-group skill-section__content-group--sliders">
        <skill-slider :label="$t('skills.tools.list.figma')" :percentage="100" />
        <skill-slider :label="$t('skills.tools.list.sketch')" :percentage="90" />
      </div>
      <div class="skill-section__content-group skill-section__content-group--sliders">
        <skill-slider :label="$t('skills.tools.list.html')" :percentage="100" />
        <skill-slider :label="$t('skills.tools.list.vue')" :percentage="70" />
        <skill-slider :label="$t('skills.tools.list.typescript')" :percentage="40" />
      </div>
    </skill-card>

    <skill-card :title="$t('skills.strengths.title')">
      <div class="skill-section__content-group skill-section__content-group--strengths">
        <key-point
          v-for="strength in strengths" :key="strength"
          size="lg"
          :icon="`${strength}-40`"
          :label="$t(`skills.strengths.list.${strength}`)"
        />
      </div>
    </skill-card>

    <skill-card :title="$t('skills.languages.title')">
      <div class="skill-section__content-group skill-section__content-group--sliders">
        <skill-slider :label="$t('skills.languages.list.french')" :percentage="100" />
        <skill-slider :label="$t('skills.languages.list.english')" :percentage="90" />
      </div>
    </skill-card>

    <skill-card :title="$t('skills.diplomas.title')">
      <div class="skill-section__content-group skill-section__content-group--diplomas">
        <span
          v-for="diploma in $tm('skills.diplomas.list')" :key="diploma"
          class="skill-section__label label-sm" v-text="diploma"
        />
      </div>
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
  }

  @media (max-width: 680px) {
    gap: 16px;
  }
}
</style>