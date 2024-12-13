import { Router } from "express";

import { getPosts } from "../controllers/post.js";

const router = Router();

router.get("/", getPosts);

export default router;
