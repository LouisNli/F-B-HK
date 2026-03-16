import Brand from './Brand';
import Dish from './Dish';
import GalleryImage from './GalleryImage';
import HomepageSettings from './HomepageSettings';

// Define associations
Brand.hasMany(Dish, { foreignKey: 'brandId', as: 'dishes' });
Dish.belongsTo(Brand, { foreignKey: 'brandId', as: 'brand' });

Brand.hasMany(GalleryImage, { foreignKey: 'brandId', as: 'gallery' });
GalleryImage.belongsTo(Brand, { foreignKey: 'brandId', as: 'brand' });

export {
  Brand,
  Dish,
  GalleryImage,
  HomepageSettings,
};

export default {
  Brand,
  Dish,
  GalleryImage,
  HomepageSettings,
};
