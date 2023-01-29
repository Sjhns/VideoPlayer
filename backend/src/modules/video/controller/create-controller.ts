import { Request, Response } from "express";
import { prismaClient } from "../../../database/client-prisma";

export class CreateController {
  static async handle(req: Request, res: Response) {
    const {  title, url, describe } = req.body;

    const videoCreated = await prismaClient.video.create({
      data: {
        title: title,
        url: url,
        describe: describe,
      },
    });

    res.status(201).json(videoCreated);
  }
}
