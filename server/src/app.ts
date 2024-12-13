import express from "express";

import postRouter from "./routers/post.js";

const app = express();
const PORT = 3000;

/**
 * Routers
 */
app.use("/api/v1/posts", postRouter);

/**
 * Server
 */
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
