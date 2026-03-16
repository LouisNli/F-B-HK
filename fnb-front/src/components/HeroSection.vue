<template>
  <section class="hero" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <p v-if="chineseTitle" class="hero__chinese chinese-text">{{ chineseTitle }}</p>
      <h1 class="hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="hero__subtitle">{{ subtitle }}</p>
      <router-link v-if="buttonText" :to="buttonLink" class="btn btn-primary hero__btn">
        {{ buttonText }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  backgroundImage: string
  title: string
  subtitle?: string
  chineseTitle?: string
  buttonText?: string
  buttonLink?: string
}

withDefaults(defineProps<Props>(), {
  buttonLink: '/'
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-white);
  padding: 0 var(--spacing-xl);
  max-width: 800px;
}

.hero__chinese {
  font-size: var(--text-2xl);
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
}

.hero__title {
  font-family: var(--font-primary);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
  color: var(--color-white);
}

.hero__subtitle {
  font-size: var(--text-lg);
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: var(--spacing-2xl);
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero__btn {
  margin-top: var(--spacing-md);
}

@media (max-width: 768px) {
  .hero {
    min-height: 500px;
  }

  .hero__title {
    font-size: var(--text-3xl);
  }

  .hero__subtitle {
    font-size: var(--text-base);
  }
}
</style>
