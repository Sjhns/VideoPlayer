import express from "express";
import { videoRoute } from "modules/video/routes";

const server = express();

server.use(express.json());
server.use(videoRoute)

server.listen(3000, () => {
  console.log("server running on port 3000");
});