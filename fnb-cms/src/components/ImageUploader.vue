<template>
  <div class="image-uploader">
    <el-upload
      class="uploader"
      action="#"
      :show-file-list="false"
      :before-upload="handleUpload"
      :disabled="uploading"
    >
      <el-button size="small" :loading="uploading">
        <el-icon><Upload /></el-icon> Upload Image
      </el-button>
    </el-upload>
    <div v-if="modelValue" class="preview">
      <img :src="getImageSrc(modelValue)" alt="Preview" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { uploadImage } from '../api'

const props = defineProps<{
  modelValue: string | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const uploading = ref(false)

const getImageSrc = (url: string) => {
  if (url.startsWith('/uploads/')) {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    return `${apiBase}${url}`
  }
  return url
}

const handleUpload = async (file: File) => {
  uploading.value = true
  try {
    const { data } = await uploadImage(file)
    emit('update:modelValue', data.data.url)
    ElMessage.success('Image uploaded!')
  } catch (error) {
    ElMessage.error('Upload failed')
  } finally {
    uploading.value = false
  }
  return false
}
</script>

<style scoped>
.image-uploader {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.preview {
  width: 80px;
  height: 60px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
