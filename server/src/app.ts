import express from "express";

export default class App {
  private readonly app = express();

  public listen(port = 3000) {
    this.app.listen(port, () =>
      console.log(`\n🟢 The server is listening at port ${port}\n`)
    );
  }
}
