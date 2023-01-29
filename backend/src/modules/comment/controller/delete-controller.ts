import { Request, Response } from "express";
import DeleteService from "../use-case/delete-service";

export class DeleteController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params
    const result = DeleteService.handle(id);

    res.status(200).json(result);
  }
}
