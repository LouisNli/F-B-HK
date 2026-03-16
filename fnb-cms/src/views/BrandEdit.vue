<template>
  <div class="brand-edit">
    <el-card>
      <template #header>
        <div class="card-header">
          <div>
            <span>{{ form?.name || 'Brand' }}</span>
            <el-tag size="small" style="margin-left: 10px">{{ $route.params.slug }}</el-tag>
          </div>
          <div class="header-actions">
            <el-button @click="$router.push(`/brands/${$route.params.slug}/dishes`)">Manage Dishes</el-button>
            <el-button @click="$router.push(`/brands/${$route.params.slug}/gallery`)">Manage Gallery</el-button>
            <el-button type="primary" :loading="saving" @click="saveBrand">Save Changes</el-button>
          </div>
        </div>
      </template>
      
      <el-form v-if="form" :model="form" label-width="180px" v-loading="loading">
        <h3 class="section-title">Basic Info</h3>
        <el-form-item label="Name (English)">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Name (Chinese)">
          <el-input v-model="form.chineseName" />
        </el-form-item>
        <el-form-item label="Tagline">
          <el-input v-model="form.tagline" />
        </el-form-item>

        <el-divider />
        
        <h3 class="section-title">Hero Section</h3>
        <el-form-item label="Hero Image">
          <el-input v-model="form.heroImage" placeholder="Image URL" />
          <ImageUploader v-model="form.heroImage" />
        </el-form-item>

        <el-divider />
        
        <h3 class="section-title">Concept (About)</h3>
        <el-form-item label="Paragraph 1">
          <el-input v-model="form.conceptParagraph1" type="textarea" :rows="3" />
        </el-form-item>
        <el-form-item label="Paragraph 2">
          <el-input v-model="form.conceptParagraph2" type="textarea" :rows="3" />
        </el-form-item>
        <el-form-item label="Paragraph 3">
          <el-input v-model="form.conceptParagraph3" type="textarea" :rows="3" />
        </el-form-item>

        <el-divider />
        
        <h3 class="section-title">Homepage Card (Preview)</h3>
        <el-form-item label="Card Image">
          <el-input v-model="form.cardImage" placeholder="Image URL" />
          <ImageUploader v-model="form.cardImage" />
        </el-form-item>
        <el-form-item label="Card Description">
          <el-input v-model="form.cardDescription" type="textarea" :rows="2" />
        </el-form-item>

        <el-divider />
        
        <h3 class="section-title">Location Info</h3>
        <el-form-item label="Address">
          <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item label="Opening Hours">
          <el-input v-model="form.openingHours" />
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="form.phone" />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getBrand, updateBrand } from '../api'
import ImageUploader from '../components/ImageUploader.vue'

const route = useRoute()
const loading = ref(true)
const saving = ref(false)
const form = ref<any>(null)

const fetchData = async () => {
  try {
    const { data } = await getBrand(route.params.slug as string)
    form.value = data.data
  } catch (error) {
    ElMessage.error('Failed to load brand data')
  } finally {
    loading.value = false
  }
}

const saveBrand = async () => {
  saving.value = true
  try {
    await updateBrand(route.params.slug as string, form.value)
    ElMessage.success('Brand saved!')
  } catch (error) {
    ElMessage.error('Failed to save')
  } finally {
    saving.value = false
  }
}

onMounted(fetchData)
</script>

<style scoped>
.brand-edit {
  max-width: 900px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.section-title {
  margin: 10px 0 20px;
  color: #303133;
}
</style>
