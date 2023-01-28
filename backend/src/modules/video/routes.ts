import { Request, Response, Router } from "express";
import { prismaClient } from "../../database/client-prisma";

export const videoRoute = Router();

videoRoute.post("/api/v1/video", async (req: Request, res: Response) => {
  const {  title, url, describe } = req.body;

  const videoCreated = await prismaClient.video.create({
    data: {
      title: title,
      url: url,
      describe: describe,
    },
  });

  res.status(201).json(videoCreated);
});

videoRoute.get("/api/v1/video", async (req: Request, res: Response) => {

  const video = await prismaClient.video.findMany({
    include: {
      comments: {
        select: {
          id: true,
          text: true,
          createdAt: true,
          updatedAt: true,

          },
        },
      }
    });

  res.status(200).json(video);
});

videoRoute.get("/api/v1/video/:id", async (req: Request, res: Response) => {
  const { id } = req.params
 
  const video = await prismaClient.video.findFirst({
    where:{
      id: id
    },
    include: {
      comments: {
        select: {
          id: true,
          text: true,
          createdAt: true,
          updatedAt: true,

          },
        },
      }
    });

  res.status(200).json(video);
});