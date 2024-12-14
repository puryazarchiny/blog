import express from "express";

import config from "./config/index.js";
import postRouter from "./routers/post.js";

const app = express();
const PORT = config.PORT;

/**
 * Routers
 */
app.use("/api/v1/posts", postRouter);

/**
 * Server
 */
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
