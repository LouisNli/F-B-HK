<template>
  <div class="container">
    <button @click="() => $router.push('/')">Index</button>
    <button @click="() => $router.push('/Homepage')">Homepage</button>
  </div>
  <RouterView />
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  margin-bottom: 10rem;
}
</style>
