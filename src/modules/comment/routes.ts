import { Request, Response, Router } from "express";
import { prismaClient } from "../../database/client-prisma";

export const commentRoute = Router();

commentRoute.post("/api/v1/video/comment", async (req: Request, res: Response) => {
  const { text, videoId } = req.body;

  const newComment = await prismaClient.comment.create({
    data: {
      text: text,
      videoId: videoId,
    },
  });

  res.status(201).json(newComment);
});

