import { Request, Response } from "express";
import { prismaClient } from "../../../database/client-prisma";

export class GetController {
 static async one(req: Request, res: Response) {
    const { id } = req.params;

    const video = await prismaClient.video.findFirst({
        where: {
          id: parseInt(id),
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
        },
      });
    res.status(200).json(video);
  }

 static async all(req: Request, res: Response) {

    const videos = await prismaClient.video.findMany({
        include: {
          comments: {
            select: {
              id: true,
              text: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });

    res.status(200).json(videos);
  }
}


