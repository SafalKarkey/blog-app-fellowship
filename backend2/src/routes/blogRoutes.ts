import { Router } from 'express';
import { createBlog, getAllBlogs, getBlog } from '../controllers/blogController';
// Import your Clerk (or auth) middleware
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

const router = Router();

// Add debugging middleware
router.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Headers:`, req.headers);
  next();
});

// Protect only the createBlog route - temporarily disable auth for testing
// router.post('/', ClerkExpressRequireAuth(), createBlog);
router.post('/', createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlog);

export default router;
