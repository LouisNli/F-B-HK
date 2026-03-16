<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <!-- Company Info -->
        <div class="footer__section">
          <p class="footer__description">
            Curating exceptional dining experiences across Hong Kong, blending traditional flavors with modern elegance.
          </p>
        </div>

        <!-- Our Brands -->
        <div class="footer__section">
          <h4 class="footer__title">Our Brands</h4>
          <ul class="footer__links">
            <li>
              <router-link to="/jade-pavilion">
                <span class="chinese-text">翠庭軒</span> Jade Pavilion
              </router-link>
            </li>
            <li>
              <router-link to="/bay-bistro">
                <span class="chinese-text">海灣餐廳</span> Bay Bistro
              </router-link>
            </li>
            <li>
              <router-link to="/mings-tea-house">
                <span class="chinese-text">茗香閣</span> Ming's Tea House
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Corporate Office -->
        <div class="footer__section">
          <h4 class="footer__title">Corporate Office</h4>
          <address class="footer__address">
            Suite 1200, Central Tower<br>
            Queen's Road Central<br>
            Hong Kong
          </address>
          <a href="mailto:contact@hkrg.com.hk" class="footer__email">contact@hkrg.com.hk</a>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} HK Restaurant Group. All rights reserved.
        </p>
        <div class="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: var(--color-footer-bg);
  color: var(--color-white);
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
}

.footer__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
}

.footer__section {
  /* Section styles */
}

.footer__description {
  font-size: var(--text-sm);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 280px;
}

.footer__title {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-lg);
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer__links a {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  transition: color var(--transition-fast);
}

.footer__links a:hover {
  color: var(--color-accent);
}

.footer__links .chinese-text {
  margin-right: var(--spacing-xs);
}

.footer__address {
  font-style: normal;
  font-size: var(--text-sm);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-md);
}

.footer__email {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
}

.footer__email:hover {
  color: var(--color-accent);
}

.footer__bottom {
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__copyright {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.6);
}

.footer__legal {
  display: flex;
  gap: var(--spacing-xl);
}

.footer__legal a {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.6);
}

.footer__legal a:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .footer__bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
}
</style>
