<template>
  <BrandPage :brand="brandData" />
</template>

<script setup lang="ts">
import BrandPage from '@/components/BrandPage.vue'

const brandData = {
  name: "Ming's Tea House",
  chineseName: '茗香閣',
  tagline: 'NOSTALGIC HONG KONG COMFORT',
  heroImage: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=1920',
  concept: [
    '茗香閣 (Ming\'s Tea House) is a love letter to Hong Kong\'s iconic Cha Chaan Teng culture, preserving the nostalgic flavors of the past in a comfortable, modern setting.',
    'We pride ourselves on our authentic silk-stocking milk tea, freshly baked pineapple buns, and classic local comfort food that has fueled generations of Hongkongers.',
    'Experience the fast-paced, vibrant energy of a traditional tea house with an elevated commitment to quality and service.'
  ],
  dishes: [
    {
      id: 1,
      name: 'Silk-Stocking Milk Tea',
      chineseName: '絲襪奶茶',
      description: 'Traditional Hong Kong-style milk tea with rich, smooth flavor',
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600'
    },
    {
      id: 2,
      name: 'Pineapple Bun with Butter',
      chineseName: '菠蘿油',
      description: 'Freshly baked crispy-top bun with thick slab of cold butter',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600'
    },
    {
      id: 3,
      name: 'French Toast',
      chineseName: '西多士',
      description: 'Deep-fried egg-soaked bread with peanut butter and syrup',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600'
    },
    {
      id: 4,
      name: 'Macaroni Soup',
      chineseName: '火腿通粉',
      description: 'Classic breakfast soup with ham, corn, and macaroni',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600'
    }
  ],
  location: {
    address: 'G/F, 88 Wellington Street, Mong Kok, Kowloon',
    hours: 'Daily: 7:00 AM - 11:00 PM',
    phone: '+852 2333 4444'
  },
  gallery: [
    'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600',
    'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600'
  ]
}
</script>
