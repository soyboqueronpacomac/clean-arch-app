import e, { Request, Response } from "express";
import { CustomReponse } from "../../domain/response/custom.response";
import { todosData } from "../../data";
import { ParamParse } from "../../utils/paramParset";
import { CustomError } from "../../domain/errors/custom.error";



export class TodosController {
  public  getTodos(_req: Request, res: Response) {
    const response = CustomReponse.ok(todosData, "Todos fetched successfully");
    res.status(response.statusCode).json(response);
  }
  public  getTodoById(req: Request, res: Response) {
    const id: number = ParamParse.parseNumber(req.params.id, res, "id")!;
    if (id === null) return; 
    const todo = todosData.find(todo => todo.id === id);
    const response = CustomReponse.ok(todo, `Todo ${id} encontrado`);
    const error = CustomError.notFound(`TODO con el id ${id} no encontrado`);
    (todo)
      ? res.status(response.statusCode).json(response)
      : res.status(error.statusCode).json({
        error
      })
  }
}