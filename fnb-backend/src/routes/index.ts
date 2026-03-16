import { Router, Request, Response } from 'express';
import cmsRoutes from './cms';
import publicRoutes from './public';

const router = Router();

// Health check endpoint
router.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'fnb-backend',
  });
});

// CMS routes (admin)
router.use('/cms', cmsRoutes);

// Public routes (frontend)
router.use('/', publicRoutes);

export default router;

