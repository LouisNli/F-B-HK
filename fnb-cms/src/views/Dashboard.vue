<template>
  <div class="dashboard">
    <h1>Welcome to HKRG CMS</h1>
    <p class="subtitle">Manage your restaurant website content</p>
    
    <el-row :gutter="20" class="cards">
      <el-col :span="8">
        <el-card shadow="hover" class="card" @click="$router.push('/homepage')">
          <el-icon :size="40"><Monitor /></el-icon>
          <h3>Homepage</h3>
          <p>Edit hero section, philosophy, and photo grid</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="card" @click="$router.push('/brands/yue-garden')">
          <el-icon :size="40"><Shop /></el-icon>
          <h3>Yue Garden</h3>
          <p>Manage content, dishes, and gallery</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="card" @click="$router.push('/brands/harbour-bistro')">
          <el-icon :size="40"><Ship /></el-icon>
          <h3>Harbour Bistro</h3>
          <p>Manage content, dishes, and gallery</p>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" class="cards">
      <el-col :span="8">
        <el-card shadow="hover" class="card" @click="$router.push('/brands/teahouse-88')">
          <el-icon :size="40"><Coffee /></el-icon>
          <h3>Teahouse 88</h3>
          <p>Manage content, dishes, and gallery</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #303133;
  margin-bottom: 8px;
}

.subtitle {
  color: #909399;
  margin-bottom: 30px;
}

.cards {
  margin-bottom: 20px;
}

.card {
  cursor: pointer;
  text-align: center;
  padding: 20px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin: 15px 0 10px;
  color: #303133;
}

.card p {
  color: #909399;
  font-size: 14px;
}
</style>
