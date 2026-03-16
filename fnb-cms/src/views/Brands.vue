<template>
  <div class="brands">
    <h1>Brands</h1>
    <el-row :gutter="20">
      <el-col :span="8" v-for="brand in brands" :key="brand.slug">
        <el-card shadow="hover" class="brand-card">
          <h3>{{ brand.name }}</h3>
          <p>{{ brand.chineseName }}</p>
          <div class="actions">
            <el-button type="primary" size="small" @click="$router.push(`/brands/${brand.slug}`)">
              Edit Content
            </el-button>
            <el-button size="small" @click="$router.push(`/brands/${brand.slug}/dishes`)">
              Dishes
            </el-button>
            <el-button size="small" @click="$router.push(`/brands/${brand.slug}/gallery`)">
              Gallery
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getBrands } from '../api'

const brands = ref<any[]>([])

onMounted(async () => {
  const { data } = await getBrands()
  brands.value = data.data
})
</script>

<style scoped>
.brands h1 {
  margin-bottom: 20px;
}

.brand-card {
  text-align: center;
}

.brand-card h3 {
  margin-bottom: 5px;
}

.brand-card p {
  color: #909399;
  margin-bottom: 15px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
