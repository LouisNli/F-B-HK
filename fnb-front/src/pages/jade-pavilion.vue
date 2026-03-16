<template>
  <BrandPage :brand="brandData" />
</template>

<script setup lang="ts">
import BrandPage from '@/components/BrandPage.vue'

const brandData = {
  name: 'Jade Pavilion',
  chineseName: '翠庭軒',
  tagline: 'AUTHENTIC CANTONESE FINE DINING',
  heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920',
  concept: [
    '翠庭軒 (Jade Pavilion) represents the pinnacle of traditional Cantonese culinary arts, situated in an atmosphere of refined modern elegance.',
    'Our master chefs bring decades of experience to craft exquisite dim sum, premium seafood, and classic Hong Kong delicacies, using only the finest seasonal ingredients sourced both locally and globally.',
    'Whether it\'s an intimate family gathering or a grand celebration, Jade Pavilion offers an unforgettable dining experience that honors our rich heritage.'
  ],
  dishes: [
    {
      id: 1,
      name: 'Crystal Shrimp Dumplings',
      chineseName: '水晶蝦餃',
      description: 'Delicate translucent wrappers filled with succulent prawns',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600'
    },
    {
      id: 2,
      name: 'Char Siu Bao',
      chineseName: '叉燒包',
      description: 'Fluffy steamed buns with honey-glazed barbecue pork',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600'
    },
    {
      id: 3,
      name: 'Steamed Fish',
      chineseName: '清蒸石斑',
      description: 'Fresh grouper steamed with ginger and spring onions',
      image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600'
    },
    {
      id: 4,
      name: 'Egg Tarts',
      chineseName: '蛋撻',
      description: 'Flaky pastry shells with silky smooth custard filling',
      image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600'
    }
  ],
  location: {
    address: 'Level 5, Premium Tower, Tsim Sha Tsui, Hong Kong',
    hours: 'Daily: 11:30 AM - 3:00 PM, 6:00 PM - 10:30 PM',
    phone: '+852 2888 9999'
  },
  gallery: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
    'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600',
    'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600',
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600'
  ]
}
</script>
