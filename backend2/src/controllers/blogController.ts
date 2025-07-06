import { Request, Response, NextFunction  } from "express";
import * as blogService from "../services/BlogService";

// Helper to get Clerk user ID from middleware/session
function getClerkUserId(req: Request): string | undefined {
  // ClerkExpressRequireAuth middleware attaches userId to req.auth.userId
  return (req as any).auth?.userId;
}

export const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;
  const authorId = getClerkUserId(req);

  if (!title || !content || !authorId) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  try {
    const blog = await blogService.createBlogPost(title, content, authorId);
    res.status(201).json(blog);
  } catch (err) {
    next(err);
  }
};

export const getAllBlogs = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await blogService.listBlogs();
    res.json(blogs);
  } catch (err) {
    // res.status(500).json({ error: "Failed to fetch blogs" });
    next(err);
  }
};

export const getBlog = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const blog = await blogService.findBlogById(id);
    if (!blog) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};
