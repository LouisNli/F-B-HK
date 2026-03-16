<template>
  <div class="homepage">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Homepage Settings</span>
          <el-button type="primary" :loading="saving" @click="saveSettings">Save Changes</el-button>
        </div>
      </template>
      
      <el-form v-if="form" :model="form" label-width="150px" v-loading="loading">
        <h3 class="section-title">Hero Section</h3>
        <el-form-item label="Hero Image">
          <el-input v-model="form.heroImage" placeholder="Image URL" />
          <ImageUploader v-model="form.heroImage" />
        </el-form-item>
        <el-form-item label="Title">
          <el-input v-model="form.heroTitle" />
        </el-form-item>
        <el-form-item label="Subtitle">
          <el-input v-model="form.heroSubtitle" type="textarea" :rows="2" />
        </el-form-item>
        <el-form-item label="Button Text">
          <el-input v-model="form.heroButtonText" />
        </el-form-item>

        <el-divider />
        
        <h3 class="section-title">Philosophy Section</h3>
        <el-form-item label="Title">
          <el-input v-model="form.philosophyTitle" />
        </el-form-item>
        <el-form-item label="Text">
          <el-input v-model="form.philosophyText" type="textarea" :rows="4" />
        </el-form-item>

        <el-divider />
        
        <h3 class="section-title">Photo Grid</h3>
        <el-form-item label="Photo 1">
          <el-input v-model="form.photoGrid1" placeholder="Image URL" />
          <ImageUploader v-model="form.photoGrid1" />
        </el-form-item>
        <el-form-item label="Photo 2">
          <el-input v-model="form.photoGrid2" placeholder="Image URL" />
          <ImageUploader v-model="form.photoGrid2" />
        </el-form-item>
        <el-form-item label="Photo 3">
          <el-input v-model="form.photoGrid3" placeholder="Image URL" />
          <ImageUploader v-model="form.photoGrid3" />
        </el-form-item>
        <el-form-item label="Photo 4">
          <el-input v-model="form.photoGrid4" placeholder="Image URL" />
          <ImageUploader v-model="form.photoGrid4" />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { getHomepage, updateHomepage } from '../api'
import ImageUploader from '../components/ImageUploader.vue'

const loading = ref(true)
const saving = ref(false)
const form = ref<any>(null)

const fetchData = async () => {
  try {
    const { data } = await getHomepage()
    form.value = data.data
  } catch (error) {
    ElMessage.error('Failed to load data')
  } finally {
    loading.value = false
  }
}

const saveSettings = async () => {
  saving.value = true
  try {
    await updateHomepage(form.value)
    ElMessage.success('Settings saved!')
  } catch (error) {
    ElMessage.error('Failed to save')
  } finally {
    saving.value = false
  }
}

onMounted(fetchData)
</script>

<style scoped>
.homepage {
  max-width: 900px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  margin: 10px 0 20px;
  color: #303133;
}
</style>
