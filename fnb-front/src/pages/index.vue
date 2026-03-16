<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection
      :background-image="heroImage"
      title="Culinary Excellence in the Heart of Hong Kong"
      subtitle="A curated collection of distinctive dining experiences, honoring tradition while embracing modern tastes."
      button-text="EXPLORE OUR BRANDS"
      button-link="#brands"
    />

    <!-- Philosophy Section -->
    <section class="philosophy section">
      <div class="container">
        <div class="philosophy__content">
          <h2 class="section-subtitle">Our Philosophy</h2>
          <p class="philosophy__text">
            At HK Restaurant Group, we believe that great food is the cornerstone of connection.
            From the refined techniques of traditional Cantonese cuisine to the comforting
            nostalgia of a local tea house, our diverse portfolio is united by a single commitment:
            uncompromising quality and exceptional hospitality.
          </p>
        </div>
      </div>
    </section>

    <!-- Photo Grid Section -->
    <section class="photo-grid">
      <div class="photo-grid__container">
        <div class="photo-grid__item photo-grid__item--tall">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800" alt="Restaurant interior" />
        </div>
        <div class="photo-grid__item">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800" alt="Food preparation" />
        </div>
        <div class="photo-grid__item photo-grid__item--tall">
          <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800" alt="Fresh vegetables" />
        </div>
        <div class="photo-grid__item">
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800" alt="Coastal view" />
        </div>
      </div>
    </section>

    <!-- Brands Section -->
    <section id="brands" class="brands section">
      <div class="container">
        <div class="brands__grid">
          <!-- Yue Garden -->
          <article class="brand-card">
            <div class="brand-card__image">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600" alt="Yue Garden" />
            </div>
            <div class="brand-card__content">
              <h3 class="brand-card__title">
                <span class="chinese-text">月園</span>
                <span>Yue Garden</span>
              </h3>
              <p class="brand-card__description">
                Authentic Cantonese fine dining in an atmosphere of refined elegance.
                Experience the pinnacle of traditional culinary arts.
              </p>
              <router-link to="/yue-garden" class="brand-card__link">
                Discover More <span class="arrow">→</span>
              </router-link>
            </div>
          </article>

          <!-- Harbour Bistro -->
          <article class="brand-card">
            <div class="brand-card__image">
              <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600" alt="Harbour Bistro" />
            </div>
            <div class="brand-card__content">
              <h3 class="brand-card__title">
                <span class="chinese-text">海港小館</span>
                <span>Harbour Bistro</span>
              </h3>
              <p class="brand-card__description">
                Where East meets West in a vibrant waterfront setting.
                Creative fusion dishes with panoramic harbour views.
              </p>
              <router-link to="/harbour-bistro" class="brand-card__link">
                Discover More <span class="arrow">→</span>
              </router-link>
            </div>
          </article>

          <!-- Teahouse 88 -->
          <article class="brand-card">
            <div class="brand-card__image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" alt="Teahouse 88" />
            </div>
            <div class="brand-card__content">
              <h3 class="brand-card__title">
                <span class="chinese-text">茶居八十八</span>
                <span>Teahouse 88</span>
              </h3>
              <p class="brand-card__description">
                A love letter to Hong Kong's iconic Cha Chaan Teng culture.
                Nostalgic flavors in a comfortable, modern setting.
              </p>
              <router-link to="/teahouse-88" class="brand-card__link">
                Discover More <span class="arrow">→</span>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'

const heroImage = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920'
</script>

<style scoped>
/* Philosophy Section */
.philosophy {
  background-color: var(--color-white);
  padding: var(--spacing-4xl) 0;
}

.philosophy__content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.philosophy__text {
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--color-secondary);
}

/* Photo Grid Section */
.photo-grid {
  padding: 0;
}

.photo-grid__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: 4px;
}

.photo-grid__item {
  overflow: hidden;
}

.photo-grid__item--tall {
  grid-row: span 2;
}

.photo-grid__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.photo-grid__item:hover img {
  transform: scale(1.05);
}

/* Brands Section */
.brands {
  background-color: var(--color-white);
  padding: var(--spacing-4xl) 0;
}

.brands__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

/* Brand Card */
.brand-card {
  background: var(--color-white);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.brand-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.brand-card__image {
  overflow: hidden;
  aspect-ratio: 4/3;
}

.brand-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.brand-card:hover .brand-card__image img {
  transform: scale(1.05);
}

.brand-card__content {
  padding: var(--spacing-xl) var(--spacing-md);
}

.brand-card__title {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.brand-card__title .chinese-text {
  font-size: var(--text-lg);
  color: var(--color-accent);
}

.brand-card__title span:last-child {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: 500;
}

.brand-card__description {
  font-size: var(--text-sm);
  line-height: 1.7;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-lg);
}

.brand-card__link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: color var(--transition-fast);
}

.brand-card__link:hover {
  color: var(--color-accent);
}

.brand-card__link .arrow {
  transition: transform var(--transition-fast);
}

.brand-card__link:hover .arrow {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 1024px) {
  .brands__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .photo-grid__container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 200px);
  }

  .photo-grid__item--tall {
    grid-row: span 1;
  }
}

@media (max-width: 768px) {
  .brands__grid {
    grid-template-columns: 1fr;
  }

  .photo-grid__container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 180px);
  }
}
</style>
