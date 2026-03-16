<template>
  <div class="brand-page">
    <!-- Hero Section -->
    <HeroSection
      :background-image="brand.heroImage"
      :title="brand.name"
      :chinese-title="brand.chineseName"
      :subtitle="brand.tagline"
    />

    <!-- Back to Home -->
    <div class="back-link">
      <router-link to="/">← Back to Home</router-link>
    </div>

    <!-- Concept Section -->
    <section class="concept section">
      <div class="container">
        <h2 class="section-subtitle">OUR CONCEPT</h2>
        <div class="concept__content">
          <p v-for="(paragraph, index) in brand.concept" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <!-- Signature Highlights -->
    <section class="highlights section">
      <div class="container">
        <h2 class="highlights__title">Signature Highlights</h2>
        <div class="divider"></div>
        <div class="highlights__grid">
          <article v-for="dish in brand.dishes" :key="dish.id" class="dish-card">
            <div class="dish-card__image">
              <img :src="dish.image" :alt="dish.name" />
            </div>
            <div class="dish-card__content">
              <h3 class="dish-card__name chinese-text">{{ dish.chineseName }}</h3>
              <h4 class="dish-card__english">{{ dish.name }}</h4>
              <p class="dish-card__description">{{ dish.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Visit Us Section -->
    <section class="visit section">
      <div class="container">
        <h2 class="visit__title">Visit Us</h2>
        <div class="visit__content">
          <div class="visit__info">
            <div class="visit__info-item">
              <div class="visit__icon">📍</div>
              <div>
                <h5>Address</h5>
                <p>{{ brand.location.address }}</p>
              </div>
            </div>
            <div class="visit__info-item">
              <div class="visit__icon">🕐</div>
              <div>
                <h5>Opening Hours</h5>
                <p>{{ brand.location.hours }}</p>
              </div>
            </div>
            <div class="visit__info-item">
              <div class="visit__icon">📞</div>
              <div>
                <h5>Reservations</h5>
                <p>{{ brand.location.phone }}</p>
              </div>
            </div>
          </div>
          <button class="btn btn-secondary">BOOK A TABLE</button>
        </div>

        <!-- Gallery -->
        <div class="visit__gallery">
          <div v-for="(image, index) in brand.gallery" :key="index" class="visit__gallery-item">
            <img :src="image" :alt="`${brand.name} atmosphere ${index + 1}`" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'

interface Dish {
  id: number
  name: string
  chineseName: string
  description: string
  image: string
}

interface Location {
  address: string
  hours: string
  phone: string
}

interface Brand {
  name: string
  chineseName: string
  tagline: string
  heroImage: string
  concept: string[]
  dishes: Dish[]
  location: Location
  gallery: string[]
}

interface Props {
  brand: Brand
}

defineProps<Props>()
</script>

<style scoped>
/* Back Link */
.back-link {
  padding: var(--spacing-lg) var(--spacing-xl);
  max-width: var(--max-width);
  margin: 0 auto;
}

.back-link a {
  font-size: var(--text-sm);
  color: var(--color-secondary);
  transition: color var(--transition-fast);
}

.back-link a:hover {
  color: var(--color-accent);
}

/* Concept Section */
.concept {
  background-color: var(--color-white);
  padding: var(--spacing-4xl) 0;
}

.concept__content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.concept__content p {
  font-size: var(--text-base);
  line-height: 1.9;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-lg);
}

.concept__content p:last-child {
  margin-bottom: 0;
}

/* Highlights Section */
.highlights {
  background-color: var(--color-light-gray);
  padding: var(--spacing-4xl) 0;
}

.highlights__title {
  font-family: var(--font-primary);
  font-size: var(--text-3xl);
  text-align: center;
  margin-bottom: var(--spacing-sm);
}

.highlights__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

/* Dish Card */
.dish-card {
  background: var(--color-white);
  overflow: hidden;
}

.dish-card__image {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.dish-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.dish-card:hover .dish-card__image img {
  transform: scale(1.05);
}

.dish-card__content {
  padding: var(--spacing-lg);
}

.dish-card__name {
  font-size: var(--text-lg);
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
}

.dish-card__english {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: 400;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
}

.dish-card__description {
  font-size: var(--text-sm);
  color: var(--color-gray);
  line-height: 1.6;
}

/* Visit Section */
.visit {
  background-color: var(--color-white);
  padding: var(--spacing-4xl) 0;
}

.visit__title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-2xl);
}

.visit__content {
  margin-bottom: var(--spacing-3xl);
}

.visit__info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.visit__info-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.visit__icon {
  font-size: var(--text-lg);
  width: 24px;
}

.visit__info-item h5 {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.visit__info-item p {
  font-size: var(--text-sm);
  color: var(--color-secondary);
  margin: 0;
}

/* Gallery */
.visit__gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.visit__gallery-item {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.visit__gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.visit__gallery-item:hover img {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 1024px) {
  .highlights__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .highlights__grid {
    grid-template-columns: 1fr;
  }

  .visit__gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
