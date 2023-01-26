import express from "express";
import { commentRoute } from "modules/comment/routes";
import { videoRoute } from "modules/video/routes";
import cors from 'cors';

const server = express();

server.use(cors())
server.use(express.json());
server.use(videoRoute)
server.use(commentRoute)

server.listen(3000, () => {
  console.log("server running on port 3000");
});