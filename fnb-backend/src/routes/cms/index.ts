import { Router, Request, Response } from 'express';
import { Brand, Dish, GalleryImage, HomepageSettings } from '../../models';
import { upload, getFileUrl, deleteFile } from '../../services/upload';
import path from 'path';

const router = Router();

// ============================================
// HOMEPAGE SETTINGS
// ============================================

// GET homepage settings
router.get('/homepage', async (_req: Request, res: Response) => {
  try {
    let settings = await HomepageSettings.findOne();
    if (!settings) {
      settings = await HomepageSettings.create({});
    }
    res.json({ success: true, data: settings });
  } catch (error) {
    console.error('Error fetching homepage settings:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch homepage settings' });
  }
});

// PUT update homepage settings
router.put('/homepage', async (req: Request, res: Response) => {
  try {
    let settings = await HomepageSettings.findOne();
    if (!settings) {
      settings = await HomepageSettings.create(req.body);
    } else {
      await settings.update(req.body);
    }
    res.json({ success: true, data: settings });
  } catch (error) {
    console.error('Error updating homepage settings:', error);
    res.status(500).json({ success: false, message: 'Failed to update homepage settings' });
  }
});

// ============================================
// BRANDS
// ============================================

// GET all brands (for list view)
router.get('/brands', async (_req: Request, res: Response) => {
  try {
    const brands = await Brand.findAll({
      order: [['id', 'ASC']],
    });
    res.json({ success: true, data: brands });
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch brands' });
  }
});

// GET single brand by slug
router.get('/brands/:slug', async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findOne({
      where: { slug: req.params.slug },
    });
    if (!brand) {
      return res.status(404).json({ success: false, message: 'Brand not found' });
    }
    res.json({ success: true, data: brand });
  } catch (error) {
    console.error('Error fetching brand:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch brand' });
  }
});

// PUT update brand
router.put('/brands/:slug', async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findOne({
      where: { slug: req.params.slug },
    });
    if (!brand) {
      return res.status(404).json({ success: false, message: 'Brand not found' });
    }
    await brand.update(req.body);
    res.json({ success: true, data: brand });
  } catch (error) {
    console.error('Error updating brand:', error);
    res.status(500).json({ success: false, message: 'Failed to update brand' });
  }
});

// ============================================
// DISHES
// ============================================

// GET dishes for a brand
router.get('/brands/:slug/dishes', async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findOne({ where: { slug: req.params.slug } });
    if (!brand) {
      return res.status(404).json({ success: false, message: 'Brand not found' });
    }
    const dishes = await Dish.findAll({
      where: { brandId: brand.id },
      order: [['sortOrder', 'ASC']],
    });
    res.json({ success: true, data: dishes });
  } catch (error) {
    console.error('Error fetching dishes:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch dishes' });
  }
});

// POST create dish for a brand
router.post('/brands/:slug/dishes', async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findOne({ where: { slug: req.params.slug } });
    if (!brand) {
      return res.status(404).json({ success: false, message: 'Brand not found' });
    }
    const maxOrder = await Dish.max('sortOrder', { where: { brandId: brand.id } }) as number || 0;
    const dish = await Dish.create({
      ...req.body,
      brandId: brand.id,
      sortOrder: maxOrder + 1,
    });
    res.status(201).json({ success: true, data: dish });
  } catch (error) {
    console.error('Error creating dish:', error);
    res.status(500).json({ success: false, message: 'Failed to create dish' });
  }
});

// PUT update dish
router.put('/dishes/:id', async (req: Request, res: Response) => {
  try {
    const dish = await Dish.findByPk(req.params.id);
    if (!dish) {
      return res.status(404).json({ success: false, message: 'Dish not found' });
    }
    await dish.update(req.body);
    res.json({ success: true, data: dish });
  } catch (error) {
    console.error('Error updating dish:', error);
    res.status(500).json({ success: false, message: 'Failed to update dish' });
  }
});

// DELETE dish
router.delete('/dishes/:id', async (req: Request, res: Response) => {
  try {
    const dish = await Dish.findByPk(req.params.id);
    if (!dish) {
      return res.status(404).json({ success: false, message: 'Dish not found' });
    }
    // Delete image if it's a local upload
    if (dish.image && dish.image.startsWith('/uploads/')) {
      const filename = path.basename(dish.image);
      await deleteFile(filename).catch(console.error);
    }
    await dish.destroy();
    res.json({ success: true, message: 'Dish deleted' });
  } catch (error) {
    console.error('Error deleting dish:', error);
    res.status(500).json({ success: false, message: 'Failed to delete dish' });
  }
});

// ============================================
// GALLERY IMAGES
// ============================================

// GET gallery images for a brand
router.get('/brands/:slug/gallery', async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findOne({ where: { slug: req.params.slug } });
    if (!brand) {
      return res.status(404).json({ success: false, message: 'Brand not found' });
    }
    const images = await GalleryImage.findAll({
      where: { brandId: brand.id },
      order: [['sortOrder', 'ASC']],
    });
    res.json({ success: true, data: images });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch gallery' });
  }
});

// POST add gallery image
router.post('/brands/:slug/gallery', async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findOne({ where: { slug: req.params.slug } });
    if (!brand) {
      return res.status(404).json({ success: false, message: 'Brand not found' });
    }
    const maxOrder = await GalleryImage.max('sortOrder', { where: { brandId: brand.id } }) as number || 0;
    const image = await GalleryImage.create({
      ...req.body,
      brandId: brand.id,
      sortOrder: maxOrder + 1,
    });
    res.status(201).json({ success: true, data: image });
  } catch (error) {
    console.error('Error adding gallery image:', error);
    res.status(500).json({ success: false, message: 'Failed to add gallery image' });
  }
});

// PUT update gallery image
router.put('/gallery/:id', async (req: Request, res: Response) => {
  try {
    const image = await GalleryImage.findByPk(req.params.id);
    if (!image) {
      return res.status(404).json({ success: false, message: 'Image not found' });
    }
    await image.update(req.body);
    res.json({ success: true, data: image });
  } catch (error) {
    console.error('Error updating gallery image:', error);
    res.status(500).json({ success: false, message: 'Failed to update gallery image' });
  }
});

// DELETE gallery image
router.delete('/gallery/:id', async (req: Request, res: Response) => {
  try {
    const image = await GalleryImage.findByPk(req.params.id);
    if (!image) {
      return res.status(404).json({ success: false, message: 'Image not found' });
    }
    // Delete file if it's a local upload
    if (image.imageUrl && image.imageUrl.startsWith('/uploads/')) {
      const filename = path.basename(image.imageUrl);
      await deleteFile(filename).catch(console.error);
    }
    await image.destroy();
    res.json({ success: true, message: 'Image deleted' });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    res.status(500).json({ success: false, message: 'Failed to delete gallery image' });
  }
});

// ============================================
// FILE UPLOAD
// ============================================

// POST upload image
router.post('/upload', upload.single('image'), (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    const url = getFileUrl(req.file.filename);
    res.json({
      success: true,
      data: {
        filename: req.file.filename,
        url,
        originalName: req.file.originalname,
        size: req.file.size,
      },
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ success: false, message: 'Failed to upload file' });
  }
});

export default router;
