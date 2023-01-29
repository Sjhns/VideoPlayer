import { Request, Response } from "express";
import { prismaClient } from "../../../database/client-prisma";
export class CreateController {
  static async handle(req: Request, res: Response) {
    const { text, videoId } = req.body;

    const commentCreated = await prismaClient.comment.create({
      data: {
        text: text,
        videoId: parseInt(videoId),
      },
    });

    res.status(201).json(commentCreated);
  }
}
