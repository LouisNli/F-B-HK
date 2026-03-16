<template>
  <el-container class="layout">
    <el-aside width="220px" class="sidebar">
      <div class="logo">
        <h2>HKRG CMS</h2>
      </div>
      <el-menu
        :default-active="currentPath"
        router
        background-color="#1d1d1d"
        text-color="#fff"
        active-text-color="#409EFF"
      >
        <el-menu-item index="/">
          <el-icon><House /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>
        <el-menu-item index="/homepage">
          <el-icon><Monitor /></el-icon>
          <span>Homepage</span>
        </el-menu-item>
        <el-sub-menu index="/brands">
          <template #title>
            <el-icon><Shop /></el-icon>
            <span>Brands</span>
          </template>
          <el-menu-item index="/brands/yue-garden">Yue Garden</el-menu-item>
          <el-menu-item index="/brands/harbour-bistro">Harbour Bistro</el-menu-item>
          <el-menu-item index="/brands/teahouse-88">Teahouse 88</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item v-if="$route.name !== 'Dashboard'">{{ $route.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}

.layout {
  height: 100%;
}

.sidebar {
  background-color: #1d1d1d;
  color: #fff;
}

.logo {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #333;
}

.logo h2 {
  color: #fff;
  font-size: 18px;
}

.header {
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.main {
  background: #f5f5f5;
  padding: 20px;
}

.el-menu {
  border-right: none;
}
</style>
