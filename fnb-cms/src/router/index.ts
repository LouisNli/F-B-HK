import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: '/brands',
    name: 'Brands',
    component: () => import('../views/Brands.vue'),
  },
  {
    path: '/brands/:slug',
    name: 'BrandEdit',
    component: () => import('../views/BrandEdit.vue'),
  },
  {
    path: '/brands/:slug/dishes',
    name: 'BrandDishes',
    component: () => import('../views/BrandDishes.vue'),
  },
  {
    path: '/brands/:slug/gallery',
    name: 'BrandGallery',
    component: () => import('../views/BrandGallery.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
