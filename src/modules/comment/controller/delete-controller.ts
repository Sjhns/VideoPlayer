import { Request, Response } from "express";
import { prismaClient } from "../../../database/client-prisma";
export class DeleteController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;

    const commentDeleted = await prismaClient.comment.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(commentDeleted);
  }
}
