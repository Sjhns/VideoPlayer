import { Request, Response, Router } from "express";
import { prismaClient } from "../../database/client-prisma";
import { CreateController } from "./controller/create-controller";
import { GetController } from "./controller/get-controller";

export const videoRoute = Router();

videoRoute.post("/api/v1/video", CreateController.handle);

videoRoute.get("/api/v1/video", GetController.all);

videoRoute.get("/api/v1/video/:id", GetController.one);