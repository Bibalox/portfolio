<script setup lang="ts">
</script>

<template>
  <div class="home-hero">
    <div class="home-hero__wrapper">
      <div class="home-hero__cover home-hero__cover--color" />
      <div class="home-hero__cover home-hero__cover--blur" />
      <p class="home-hero__paragraph paragraph-lg">
        Bienvenue,<br />
        <br />
        Je suis Jean-Baptiste, <strong class="home-hero__paragraph home-hero__paragraph--strong">product designer</strong> spécialisé dans la conception d’<strong class="home-hero__paragraph home-hero__paragraph--strong">interfaces claires</strong> et de <strong class="home-hero__paragraph home-hero__paragraph--strong">design system efficients</strong>.<br />
        <br />
        Si vous souhaitez en savoir plus à mon sujet ne bougez surtout pas, vous-êtes au bon endroit !
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.home-hero {
  margin: 0 24px;

  $radius: 20px;

  &__wrapper {
    align-items: center;
    aspect-ratio: 16/9;
    background: center / cover no-repeat url("/images/hero-background.jpeg");
    border-radius: $radius;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 480px;
    max-height: 800px;
    overflow: hidden;
    padding: 0 64px;
    position: relative;
    width: 100%;
  }

  &__paragraph {
    color: var(--system-solid-800);
    position: relative;
    margin: 0;
    max-width: 600px;
    width: 100%;

    &--strong {
      font-weight: 700;
    }
  }

  &__cover {
    height: 100%;
    position: absolute;
    width: 100%;

    // Duplicating the layers avoid having blurry edges at certain sizes

    &--color {
      background-color: var(--cover-hard);
    }

    &--blur {
      border-radius: $radius;
      box-shadow: inset 0 0 0 1px var(--stroke-medium);
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
    }
  }
  
  @media (max-width: 680px) {
    margin: 16px;

    &__wrapper {
      aspect-ratio: unset;
      padding: 56px 48px;
      max-height: unset;
    }
  }
}
</style>