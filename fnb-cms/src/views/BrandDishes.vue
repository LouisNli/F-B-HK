<template>
  <div class="brand-dishes">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Dishes - {{ brandName }}</span>
          <el-button type="primary" @click="openAddDialog">Add Dish</el-button>
        </div>
      </template>
      
      <el-table :data="dishes" v-loading="loading">
        <el-table-column label="Image" width="100">
          <template #default="{ row }">
            <img v-if="row.image" :src="getImageSrc(row.image)" class="dish-img" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="chineseName" label="Chinese Name" />
        <el-table-column prop="description" label="Description" />
        <el-table-column label="Actions" width="180">
          <template #default="{ row }">
            <el-button size="small" @click="openEditDialog(row)">Edit</el-button>
            <el-button size="small" type="danger" @click="handleDelete(row.id)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog v-model="dialogVisible" :title="editingDish ? 'Edit Dish' : 'Add Dish'" width="500px">
      <el-form :model="dishForm" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="dishForm.name" />
        </el-form-item>
        <el-form-item label="Chinese Name">
          <el-input v-model="dishForm.chineseName" />
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="dishForm.description" type="textarea" :rows="2" />
        </el-form-item>
        <el-form-item label="Image">
          <el-input v-model="dishForm.image" placeholder="Image URL" />
          <ImageUploader v-model="dishForm.image" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" :loading="saving" @click="saveDish">Save</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getDishes, createDish, updateDish, deleteDish, getBrand } from '../api'
import ImageUploader from '../components/ImageUploader.vue'

const route = useRoute()
const slug = route.params.slug as string

const loading = ref(true)
const saving = ref(false)
const dishes = ref<any[]>([])
const brandName = ref('')
const dialogVisible = ref(false)
const editingDish = ref<any>(null)
const dishForm = ref({
  name: '',
  chineseName: '',
  description: '',
  image: ''
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
    const [dishesRes, brandRes] = await Promise.all([
      getDishes(slug),
      getBrand(slug)
    ])
    dishes.value = dishesRes.data.data
    brandName.value = brandRes.data.data.name
  } catch (error) {
    ElMessage.error('Failed to load dishes')
  } finally {
    loading.value = false
  }
}

const openAddDialog = () => {
  editingDish.value = null
  dishForm.value = { name: '', chineseName: '', description: '', image: '' }
  dialogVisible.value = true
}

const openEditDialog = (dish: any) => {
  editingDish.value = dish
  dishForm.value = { ...dish }
  dialogVisible.value = true
}

const saveDish = async () => {
  saving.value = true
  try {
    if (editingDish.value) {
      await updateDish(editingDish.value.id, dishForm.value)
    } else {
      await createDish(slug, dishForm.value)
    }
    ElMessage.success('Dish saved!')
    dialogVisible.value = false
    fetchData()
  } catch (error) {
    ElMessage.error('Failed to save dish')
  } finally {
    saving.value = false
  }
}

const handleDelete = async (id: number) => {
  try {
    await ElMessageBox.confirm('Are you sure you want to delete this dish?', 'Confirm')
    await deleteDish(id)
    ElMessage.success('Dish deleted')
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

.dish-img {
  width: 60px;
  height: 45px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
