import { Request, Response } from "express";
import CreateService from "../use-case/create-service";

export class CreateController {
  static async handle(req: Request, res: Response) {
    const { text, videoId } = req.body;

    const result = CreateService.handle(text, videoId);

    res.status(201).json(result);
  }
}
