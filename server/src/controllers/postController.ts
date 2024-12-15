import { Request, Response } from "express";

class PostController {
  public getPosts(req: Request, res: Response) {
    res.send("Posts");
  }
}

export default PostController;
