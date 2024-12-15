import { Router } from "express";

import { getPosts } from "../controllers/index.js";

class PostRouter {
  public readonly router = Router();

  constructor() {
    this.GET();
  }

  private GET() {
    this.router.get("/", getPosts);
  }
}

export default PostRouter;
