import express from "express";

import { PORT } from "./config/index.js";
import { postRouter } from "./routers/index.js";

export default class App {
  private readonly app = express();
  private readonly PORT = PORT;

  constructor() {
    this.initRouters();
  }

  private initRouters() {
    this.app.use("/api/v1/posts", postRouter);
  }

  public listen() {
    this.app.listen(this.PORT, () =>
      console.log(`http://localhost:${this.PORT}`)
    );
  }
}
