<template>
  <BrandPage :brand="brandData" />
</template>

<script setup lang="ts">
import BrandPage from '@/components/BrandPage.vue'

const brandData = {
  name: 'Bay Bistro',
  chineseName: '海灣餐廳',
  tagline: 'CASUAL WATERFRONT FUSION',
  heroImage: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1920',
  concept: [
    '海灣餐廳 (Bay Bistro) is a vibrant waterfront dining destination where East meets West in a relaxed, family-friendly environment.',
    'Drawing inspiration from Hong Kong\'s unique position as an international crossroads, our menu features creative fusion dishes, hearty brunches, and comforting dinners.',
    'With panoramic views of Victoria Harbour, it is the perfect spot for weekend gatherings, casual dates, and everything in between.'
  ],
  dishes: [
    {
      id: 1,
      name: 'Seafood Platter',
      chineseName: '海鮮拼盤',
      description: 'Fresh oysters, prawns, and lobster with house-made sauces',
      image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600'
    },
    {
      id: 2,
      name: 'Wagyu Burger',
      chineseName: '和牛漢堡',
      description: 'Premium wagyu beef patty with truffle aioli',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
    },
    {
      id: 3,
      name: 'Pan-Seared Salmon',
      chineseName: '香煎三文魚',
      description: 'Atlantic salmon with miso glaze and seasonal vegetables',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600'
    },
    {
      id: 4,
      name: 'Tiramisu',
      chineseName: '提拉米蘇',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600'
    }
  ],
  location: {
    address: 'Shop 12, Promenade Level, West Kowloon Cultural District',
    hours: 'Mon-Fri: 11:00 AM - 10:00 PM | Sat-Sun: 9:00 AM - 10:30 PM',
    phone: '+852 2777 8888'
  },
  gallery: [
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
    'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=600',
    'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600',
    'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600',
    'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=600'
  ]
}
</script>
