import { Router, Request, Response } from 'express';

const router = Router();

// Health check endpoint
router.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'fnb-backend',
  });
});

// Brands endpoint (placeholder for future implementation)
router.get('/brands', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: 'Brand 1', slug: 'brand-1' },
      { id: 2, name: 'Brand 2', slug: 'brand-2' },
      { id: 3, name: 'Brand 3', slug: 'brand-3' },
    ],
  });
});

// Single brand endpoint
router.get('/brands/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  res.json({
    success: true,
    data: {
      slug,
      name: `Brand ${slug}`,
      description: 'Brand description placeholder',
    },
  });
});

export default router;
