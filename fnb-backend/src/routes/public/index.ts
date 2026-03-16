import { Router, Request, Response } from 'express';
import { Brand, Dish, GalleryImage, HomepageSettings } from '../../models';

const router = Router();

// GET homepage data (settings + brand cards)
router.get('/homepage', async (_req: Request, res: Response) => {
  try {
    const [settings, brands] = await Promise.all([
      HomepageSettings.findOne(),
      Brand.findAll({
        attributes: ['slug', 'name', 'chineseName', 'cardImage', 'cardDescription'],
        order: [['id', 'ASC']],
      }),
    ]);
    
    res.json({
      success: true,
      data: {
        hero: {
          image: settings?.heroImage,
          title: settings?.heroTitle,
          subtitle: settings?.heroSubtitle,
          buttonText: settings?.heroButtonText,
        },
        philosophy: {
          title: settings?.philosophyTitle,
          text: settings?.philosophyText,
        },
        photoGrid: [
          settings?.photoGrid1,
          settings?.photoGrid2,
          settings?.photoGrid3,
          settings?.photoGrid4,
        ].filter(Boolean),
        brands: brands.map(b => ({
          slug: b.slug,
          name: b.name,
          chineseName: b.chineseName,
          image: b.cardImage,
          description: b.cardDescription,
        })),
      },
    });
  } catch (error) {
    console.error('Error fetching homepage:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch homepage data' });
  }
});

// GET all brands (for navigation)
router.get('/brands', async (_req: Request, res: Response) => {
  try {
    const brands = await Brand.findAll({
      attributes: ['slug', 'name', 'chineseName'],
      order: [['id', 'ASC']],
    });
    res.json({ success: true, data: brands });
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch brands' });
  }
});

// GET single brand with full details
router.get('/brands/:slug', async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findOne({
      where: { slug: req.params.slug },
      include: [
        { model: Dish, as: 'dishes', order: [['sortOrder', 'ASC']] },
        { model: GalleryImage, as: 'gallery', order: [['sortOrder', 'ASC']] },
      ],
    });
    
    if (!brand) {
      return res.status(404).json({ success: false, message: 'Brand not found' });
    }

    // Transform to frontend-friendly format
    const data = {
      name: brand.name,
      chineseName: brand.chineseName,
      tagline: brand.tagline,
      heroImage: brand.heroImage,
      concept: [
        brand.conceptParagraph1,
        brand.conceptParagraph2,
        brand.conceptParagraph3,
      ].filter(Boolean),
      dishes: (brand as any).dishes?.map((d: Dish) => ({
        id: d.id,
        name: d.name,
        chineseName: d.chineseName,
        description: d.description,
        image: d.image,
      })) || [],
      location: {
        address: brand.address,
        hours: brand.openingHours,
        phone: brand.phone,
      },
      gallery: (brand as any).gallery?.map((g: GalleryImage) => g.imageUrl) || [],
    };

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching brand:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch brand' });
  }
});

export default router;
