<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        HKRG
      </router-link>

      <button class="header__menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="header__menu-icon" :class="{ 'is-open': isMenuOpen }"></span>
      </button>

      <nav class="header__nav" :class="{ 'is-open': isMenuOpen }">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <router-link to="/" class="header__nav-link" @click="closeMenu">HOME</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/yue-garden" class="header__nav-link" @click="closeMenu">YUE GARDEN</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/harbour-bistro" class="header__nav-link" @click="closeMenu">HARBOUR BISTRO</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/teahouse-88" class="header__nav-link" @click="closeMenu">TEAHOUSE 88</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  transition: background-color var(--transition-normal), box-shadow var(--transition-normal);
}

.header--scrolled {
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
}

.header__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: 2px;
  transition: color var(--transition-normal);
}

.header--scrolled .header__logo {
  color: var(--color-primary);
}

.header__nav-list {
  display: flex;
  gap: var(--spacing-2xl);
}

.header__nav-link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-white);
  letter-spacing: 1px;
  transition: color var(--transition-fast);
  position: relative;
}

.header--scrolled .header__nav-link {
  color: var(--color-primary);
}

.header__nav-link:hover,
.header__nav-link.router-link-active {
  color: var(--color-accent);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width var(--transition-normal);
}

.header__nav-link:hover::after,
.header__nav-link.router-link-active::after {
  width: 100%;
}

.header__menu-toggle {
  display: none;
  width: 30px;
  height: 24px;
  position: relative;
}

.header__menu-icon,
.header__menu-icon::before,
.header__menu-icon::after {
  width: 100%;
  height: 2px;
  background-color: var(--color-white);
  position: absolute;
  transition: all var(--transition-normal);
}

.header--scrolled .header__menu-icon,
.header--scrolled .header__menu-icon::before,
.header--scrolled .header__menu-icon::after {
  background-color: var(--color-primary);
}

.header__menu-icon {
  top: 50%;
  transform: translateY(-50%);
}

.header__menu-icon::before,
.header__menu-icon::after {
  content: '';
  left: 0;
}

.header__menu-icon::before {
  top: -8px;
}

.header__menu-icon::after {
  bottom: -8px;
}

.header__menu-icon.is-open {
  background-color: transparent;
}

.header__menu-icon.is-open::before {
  top: 0;
  transform: rotate(45deg);
}

.header__menu-icon.is-open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .header__menu-toggle {
    display: block;
    z-index: 1001;
  }

  .header__nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
  }

  .header__nav.is-open {
    opacity: 1;
    visibility: visible;
  }

  .header__nav-list {
    flex-direction: column;
    gap: var(--spacing-xl);
    text-align: center;
  }

  .header__nav-link {
    color: var(--color-primary);
    font-size: var(--text-lg);
  }
}
</style>
