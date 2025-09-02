import e, { Request, Response } from "express";
import { CustomReponse } from "../../domain/response/custom.response";
import { Todo, todosData } from "../../data";
import { ParamParse } from "../../utils/paramParset";
import { CustomError } from "../../domain/errors/custom.error";



export class TodosController {

  private findByOrThrow(id: number) {
    const todo = todosData.find((t) => t.id === id);
    if (!todo) {
      throw CustomError.notFound(`TODO con el id ${id} no encontrado`);
    }
    return todo;
  }
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

  public createTodo (req: Request, res: Response) {
    const { text } = req.body
    if (!text) {
      const error = CustomError.badRequest('El texto es obligatorio');
      res.status(error.statusCode).json({error});
    }
    const todo: Todo ={
      id: todosData.length + 1,
      text,
      completedAt: new Date()
    }
    todosData.push(todo)
    const response = CustomReponse.created(todo, 'TODO Creado correctamente')
    res.status(response.statusCode).json(response)
  }
  public updatedTodos(req: Request, res: Response) {
    const id: number = ParamParse.parseNumber(req.params.id, res, "id")!;
    if (id === null) return; 
    const todo: Todo = todosData.find(todo => todo.id === id);
    const error = CustomError.notFound(`TODO con el id ${id} no encontrado`);
    if (!todo) {
      res.status(error.statusCode).json({error});
    }
    const { text, completedAt } = req.body;
    if (typeof text === 'string') {
      todo.text = text;
    }
    if (completedAt === null) {
      todo.completedAt = null;
    } else if (completedAt !== undefined) {
      todo.completedAt = new Date(completedAt);
    }
    const response =  CustomReponse.ok(todo, `Todo con el id ${id} actualizado correctamente`);
    res.status(response.statusCode).json(response);
  }
  public deleteTodos(req: Request, res: Response) {
    const id: number = ParamParse.parseNumber(req.params.id, res, "id")!;
    if (id === null) return; 
    const todo = todosData.find(todo => todo.id === id);
    const error = CustomError.notFound(`TODO con el id ${id} no encontrado`);
    if (!todo) {
      res.status(error.statusCode).json({error});
    }
    todosData.splice(todosData.indexOf(todo!),1 )
    const response =  CustomReponse.noContent(todo, `Todo con el id ${id} eliminado correctamente`);
    res.status(response.statusCode).json(response);
  }
}