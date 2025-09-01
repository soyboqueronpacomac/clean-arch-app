import { Request, Response } from "express";
import { CustomReponse } from "../../domain/response/custom.response";
import { todosData } from "../../data";



export class TodosController {
  public  getTodos(_req: Request, res: Response) {
    const response = CustomReponse.ok(todosData, "Todos fetched successfully");
    res.status(response.statusCode).json(response);
  }
}