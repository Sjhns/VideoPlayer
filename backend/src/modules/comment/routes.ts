import { Router } from "express";
import { CreateController } from "./controller/create-controller";
import { DeleteController } from "./controller/delete-controller";

export const commentRoute = Router();

commentRoute.post("/api/v1/video/comment", CreateController.handle);

commentRoute.delete("/api/v1/video/comment/:id", DeleteController.handle);
