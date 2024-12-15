import PostController from "./postController.js";

const postController = new PostController();
const { getPosts } = postController;

export { getPosts };
