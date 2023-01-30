import express from "express";
import { commentRoute } from "./modules/comment/routes/routes";
import { videoRoute } from "./modules/video/routes/routes";
import cors from 'cors';

const server = express();
const port = process.env.PORT || 4000

server.use(cors())
server.use(express.json());
server.use(videoRoute)
server.use(commentRoute)

server.listen(port , () => {
  console.log("server running on port 4000");
});