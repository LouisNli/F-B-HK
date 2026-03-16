<template>
  <div class="brand-gallery">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Gallery - {{ brandName }}</span>
          <el-button type="primary" @click="openAddDialog">Add Image</el-button>
        </div>
      </template>
      
      <div v-loading="loading" class="gallery-grid">
        <div v-for="image in gallery" :key="image.id" class="gallery-item">
          <img :src="getImageSrc(image.imageUrl)" :alt="image.altText" />
          <div class="overlay">
            <el-button size="small" circle @click="openEditDialog(image)">
              <el-icon><Edit /></el-icon>
            </el-button>
            <el-button size="small" circle type="danger" @click="handleDelete(image.id)">
              <el-icon><Delete /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </el-card>

    <el-dialog v-model="dialogVisible" :title="editingImage ? 'Edit Image' : 'Add Image'" width="500px">
      <el-form :model="imageForm" label-width="100px">
        <el-form-item label="Image URL">
          <el-input v-model="imageForm.imageUrl" placeholder="Image URL" />
          <ImageUploader v-model="imageForm.imageUrl" />
        </el-form-item>
        <el-form-item label="Alt Text">
          <el-input v-model="imageForm.altText" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" :loading="saving" @click="saveImage">Save</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getGallery, addGalleryImage, updateGalleryImage, deleteGalleryImage, getBrand } from '../api'
import ImageUploader from '../components/ImageUploader.vue'

const route = useRoute()
const slug = route.params.slug as string

const loading = ref(true)
const saving = ref(false)
const gallery = ref<any[]>([])
const brandName = ref('')
const dialogVisible = ref(false)
const editingImage = ref<any>(null)
const imageForm = ref({
  imageUrl: '',
  altText: ''
})

const getImageSrc = (url: string) => {
  if (url?.startsWith('/uploads/')) {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    return `${apiBase}${url}`
  }
  return url
}

const fetchData = async () => {
  try {
    const [galleryRes, brandRes] = await Promise.all([
      getGallery(slug),
      getBrand(slug)
    ])
    gallery.value = galleryRes.data.data
    brandName.value = brandRes.data.data.name
  } catch (error) {
    ElMessage.error('Failed to load gallery')
  } finally {
    loading.value = false
  }
}

const openAddDialog = () => {
  editingImage.value = null
  imageForm.value = { imageUrl: '', altText: '' }
  dialogVisible.value = true
}

const openEditDialog = (image: any) => {
  editingImage.value = image
  imageForm.value = { ...image }
  dialogVisible.value = true
}

const saveImage = async () => {
  saving.value = true
  try {
    if (editingImage.value) {
      await updateGalleryImage(editingImage.value.id, imageForm.value)
    } else {
      await addGalleryImage(slug, imageForm.value)
    }
    ElMessage.success('Image saved!')
    dialogVisible.value = false
    fetchData()
  } catch (error) {
    ElMessage.error('Failed to save image')
  } finally {
    saving.value = false
  }
}

const handleDelete = async (id: number) => {
  try {
    await ElMessageBox.confirm('Are you sure you want to delete this image?', 'Confirm')
    await deleteGalleryImage(id)
    ElMessage.success('Image deleted')
    fetchData()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('Failed to delete')
    }
  }
}

onMounted(fetchData)
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-item .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.2s;
}

.gallery-item:hover .overlay {
  opacity: 1;
}
</style>
