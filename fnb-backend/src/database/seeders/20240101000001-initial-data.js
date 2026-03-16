'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Seed homepage settings
    await queryInterface.bulkInsert('homepage_settings', [{
      hero_image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920',
      hero_title: 'Culinary Excellence in the Heart of Hong Kong',
      hero_subtitle: 'A curated collection of distinctive dining experiences, honoring tradition while embracing modern tastes.',
      hero_button_text: 'EXPLORE OUR BRANDS',
      philosophy_title: 'Our Philosophy',
      philosophy_text: 'At HK Restaurant Group, we believe that great food is the cornerstone of connection. From the refined techniques of traditional Cantonese cuisine to the comforting nostalgia of a local tea house, our diverse portfolio is united by a single commitment: uncompromising quality and exceptional hospitality.',
      photo_grid_1: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      photo_grid_2: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
      photo_grid_3: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
      photo_grid_4: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
      created_at: new Date(),
      updated_at: new Date()
    }]);

    // Seed brands
    await queryInterface.bulkInsert('brands', [
      {
        slug: 'yue-garden',
        name: 'Yue Garden',
        chinese_name: '月園',
        tagline: 'AUTHENTIC CANTONESE FINE DINING',
        hero_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920',
        concept_paragraph_1: '月園 (Yue Garden) represents the pinnacle of traditional Cantonese culinary arts, situated in an atmosphere of refined modern elegance.',
        concept_paragraph_2: 'Our master chefs bring decades of experience to craft exquisite dim sum, premium seafood, and classic Hong Kong delicacies, using only the finest seasonal ingredients sourced both locally and globally.',
        concept_paragraph_3: 'Whether it\'s an intimate family gathering or a grand celebration, Yue Garden offers an unforgettable dining experience that honors our rich heritage.',
        card_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
        card_description: 'Authentic Cantonese fine dining in an atmosphere of refined elegance. Experience the pinnacle of traditional culinary arts.',
        address: 'Level 5, The Peninsula Tower, Tsim Sha Tsui, Hong Kong',
        opening_hours: 'Daily: 11:30 AM - 3:00 PM, 6:00 PM - 10:30 PM',
        phone: '+852 2888 9999',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: 'harbour-bistro',
        name: 'Harbour Bistro',
        chinese_name: '海港小館',
        tagline: 'CONTEMPORARY FUSION WITH A VIEW',
        hero_image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920',
        concept_paragraph_1: '海港小館 (Harbour Bistro) is where culinary creativity meets breathtaking waterfront scenery.',
        concept_paragraph_2: 'Our innovative menu blends Eastern and Western flavors, featuring fresh seasonal ingredients prepared with modern techniques while respecting traditional roots.',
        concept_paragraph_3: 'With panoramic harbour views and a relaxed yet sophisticated atmosphere, Harbour Bistro is perfect for business lunches, romantic dinners, or celebrations with friends.',
        card_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600',
        card_description: 'Where East meets West in a vibrant waterfront setting. Creative fusion dishes with panoramic harbour views.',
        address: 'G/F, Harbour City, Tsim Sha Tsui, Hong Kong',
        opening_hours: 'Daily: 12:00 PM - 11:00 PM',
        phone: '+852 2888 8888',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        slug: 'teahouse-88',
        name: 'Teahouse 88',
        chinese_name: '茶居八十八',
        tagline: 'AUTHENTIC CHA CHAAN TENG CULTURE',
        hero_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920',
        concept_paragraph_1: '茶居八十八 (Teahouse 88) is a heartfelt tribute to Hong Kong\'s beloved Cha Chaan Teng culture.',
        concept_paragraph_2: 'We serve all the classics you know and love - silky milk tea, crispy pineapple buns, savory macaroni soup, and Hong Kong-style French toast - all prepared with the same care and quality as the neighborhood shops of yesteryear.',
        concept_paragraph_3: 'Step into Teahouse 88 and experience the warmth and nostalgia of old Hong Kong in a comfortable, modern setting.',
        card_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        card_description: 'A love letter to Hong Kong\'s iconic Cha Chaan Teng culture. Nostalgic flavors in a comfortable, modern setting.',
        address: '88 Wellington Street, Central, Hong Kong',
        opening_hours: 'Daily: 7:00 AM - 10:00 PM',
        phone: '+852 2888 7788',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);

    // Get brand IDs
    const brands = await queryInterface.sequelize.query(
      'SELECT id, slug FROM brands',
      { type: Sequelize.QueryTypes.SELECT }
    );
    const brandMap = {};
    brands.forEach(b => { brandMap[b.slug] = b.id; });

    // Seed dishes for Yue Garden
    await queryInterface.bulkInsert('dishes', [
      { brand_id: brandMap['yue-garden'], name: 'Crystal Shrimp Dumplings', chinese_name: '水晶蝦餃', description: 'Delicate translucent wrappers filled with succulent prawns', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600', sort_order: 1, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['yue-garden'], name: 'Char Siu Bao', chinese_name: '叉燒包', description: 'Fluffy steamed buns with honey-glazed barbecue pork', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600', sort_order: 2, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['yue-garden'], name: 'Steamed Fish', chinese_name: '清蒸石斑', description: 'Fresh grouper steamed with ginger and spring onions', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600', sort_order: 3, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['yue-garden'], name: 'Egg Tarts', chinese_name: '蛋撻', description: 'Flaky pastry shells with silky smooth custard filling', image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600', sort_order: 4, created_at: new Date(), updated_at: new Date() }
    ]);

    // Seed dishes for Harbour Bistro
    await queryInterface.bulkInsert('dishes', [
      { brand_id: brandMap['harbour-bistro'], name: 'Wagyu Beef Tartare', chinese_name: '和牛他他', description: 'Premium wagyu with Asian-inspired seasonings', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600', sort_order: 1, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['harbour-bistro'], name: 'Lobster Thermidor', chinese_name: '焗龍蝦', description: 'Classic French preparation with a Hong Kong twist', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600', sort_order: 2, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['harbour-bistro'], name: 'Truffle Risotto', chinese_name: '松露意大利飯', description: 'Creamy arborio rice with black truffle shavings', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600', sort_order: 3, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['harbour-bistro'], name: 'Matcha Lava Cake', chinese_name: '抹茶心太軟', description: 'Warm matcha cake with molten center', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600', sort_order: 4, created_at: new Date(), updated_at: new Date() }
    ]);

    // Seed dishes for Teahouse 88
    await queryInterface.bulkInsert('dishes', [
      { brand_id: brandMap['teahouse-88'], name: 'Silk Stocking Milk Tea', chinese_name: '絲襪奶茶', description: 'Rich and smooth Hong Kong-style milk tea', image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600', sort_order: 1, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['teahouse-88'], name: 'Pineapple Bun with Butter', chinese_name: '菠蘿油', description: 'Crispy sweet top with cold butter slice', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600', sort_order: 2, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['teahouse-88'], name: 'Macaroni Soup', chinese_name: '火腿通粉', description: 'Comforting soup with ham and vegetables', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600', sort_order: 3, created_at: new Date(), updated_at: new Date() },
      { brand_id: brandMap['teahouse-88'], name: 'French Toast', chinese_name: '西多士', description: 'Deep-fried toast with peanut butter and condensed milk', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600', sort_order: 4, created_at: new Date(), updated_at: new Date() }
    ]);

    // Seed gallery images for all brands
    const galleryImages = [
      // Yue Garden
      { brand_id: brandMap['yue-garden'], image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', alt_text: 'Yue Garden interior', sort_order: 1 },
      { brand_id: brandMap['yue-garden'], image_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt_text: 'Fine dining experience', sort_order: 2 },
      { brand_id: brandMap['yue-garden'], image_url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600', alt_text: 'Elegant table setting', sort_order: 3 },
      { brand_id: brandMap['yue-garden'], image_url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600', alt_text: 'Dim sum preparation', sort_order: 4 },
      { brand_id: brandMap['yue-garden'], image_url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600', alt_text: 'Chef at work', sort_order: 5 },
      { brand_id: brandMap['yue-garden'], image_url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600', alt_text: 'Fresh ingredients', sort_order: 6 },
      // Harbour Bistro
      { brand_id: brandMap['harbour-bistro'], image_url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600', alt_text: 'Harbour view dining', sort_order: 1 },
      { brand_id: brandMap['harbour-bistro'], image_url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600', alt_text: 'Modern interior', sort_order: 2 },
      { brand_id: brandMap['harbour-bistro'], image_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt_text: 'Fusion dishes', sort_order: 3 },
      { brand_id: brandMap['harbour-bistro'], image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', alt_text: 'Bar area', sort_order: 4 },
      { brand_id: brandMap['harbour-bistro'], image_url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600', alt_text: 'Kitchen action', sort_order: 5 },
      { brand_id: brandMap['harbour-bistro'], image_url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600', alt_text: 'Fresh seafood', sort_order: 6 },
      // Teahouse 88
      { brand_id: brandMap['teahouse-88'], image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', alt_text: 'Classic teahouse', sort_order: 1 },
      { brand_id: brandMap['teahouse-88'], image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', alt_text: 'Cozy seating', sort_order: 2 },
      { brand_id: brandMap['teahouse-88'], image_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', alt_text: 'Milk tea preparation', sort_order: 3 },
      { brand_id: brandMap['teahouse-88'], image_url: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600', alt_text: 'Nostalgic decor', sort_order: 4 },
      { brand_id: brandMap['teahouse-88'], image_url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600', alt_text: 'Local favorites', sort_order: 5 },
      { brand_id: brandMap['teahouse-88'], image_url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600', alt_text: 'Fresh bakes', sort_order: 6 }
    ].map(img => ({ ...img, created_at: new Date(), updated_at: new Date() }));

    await queryInterface.bulkInsert('gallery_images', galleryImages);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gallery_images', null, {});
    await queryInterface.bulkDelete('dishes', null, {});
    await queryInterface.bulkDelete('brands', null, {});
    await queryInterface.bulkDelete('homepage_settings', null, {});
  }
};
