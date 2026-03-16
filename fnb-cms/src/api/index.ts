import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
})

// Homepage settings
export const getHomepage = () => api.get('/cms/homepage')
export const updateHomepage = (data: any) => api.put('/cms/homepage', data)

// Brands
export const getBrands = () => api.get('/cms/brands')
export const getBrand = (slug: string) => api.get(`/cms/brands/${slug}`)
export const updateBrand = (slug: string, data: any) => api.put(`/cms/brands/${slug}`, data)

// Dishes
export const getDishes = (slug: string) => api.get(`/cms/brands/${slug}/dishes`)
export const createDish = (slug: string, data: any) => api.post(`/cms/brands/${slug}/dishes`, data)
export const updateDish = (id: number, data: any) => api.put(`/cms/dishes/${id}`, data)
export const deleteDish = (id: number) => api.delete(`/cms/dishes/${id}`)

// Gallery
export const getGallery = (slug: string) => api.get(`/cms/brands/${slug}/gallery`)
export const addGalleryImage = (slug: string, data: any) => api.post(`/cms/brands/${slug}/gallery`, data)
export const updateGalleryImage = (id: number, data: any) => api.put(`/cms/gallery/${id}`, data)
export const deleteGalleryImage = (id: number) => api.delete(`/cms/gallery/${id}`)

// Upload
export const uploadImage = (file: File) => {
  const formData = new FormData()
  formData.append('image', file)
  return api.post('/cms/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export default api
