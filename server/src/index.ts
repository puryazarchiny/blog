import { createServer } from "node:http";

const server = createServer((_, res) => res.end("The server response"));

server.listen(3000, () => console.log("The server is listening at port 3000"));
