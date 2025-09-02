import e, { Request, Response } from "express";
import { CustomReponse } from "../../domain/response/custom.response";
import { CustomError } from "../../domain/errors/custom.error";
import { prisma } from "../../data/postgres";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";



export class TodosController {
  public readonly db = prisma;

    private async findTodoById(idParam: string, res: Response) {
    const id = Number(idParam);
    if (isNaN(id)) {
      const error = CustomError.badRequest("Id inválido");
      res.status(error.statusCode).json({ error });
      return null;
    }

    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo) {
      const error = CustomError.notFound(`TODO con id ${id} no encontrado`);
      res.status(error.statusCode).json({ error });
      return null;
    }

    return todo;
  }

 
  public async getTodos (_req: Request, res: Response) {
    const todos = await prisma.todo.findMany();
    const response = CustomReponse.ok(todos, "Todos fetched successfully");
    res.status(response.statusCode).json(response);
  }
  // Obtener un TODO por id
  public async getTodoById(req: Request, res: Response) {
    try {
      const todo = await this.findTodoById(req.params.id, res);
      if (!todo) return;

      const response = CustomReponse.ok(todo, `TODO ID ${todo.id} encontrado`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      CustomError.handleError(error, res);
    }
  }

  // Crear un TODO
  public async createTodo (req: Request, res: Response) {
    const [ error, createTodoDto ] = CreateTodoDto.create(req.body);
    if (error) {
      const errorCreateTodoDto = CustomError.badRequest(error);
      res.status(errorCreateTodoDto.statusCode).json({errorCreateTodoDto})
    }
    const { text, completedAt} = createTodoDto!
     const todo = await prisma.todo.create({
      data: {
        text,
        completedAt: completedAt ? new Date(completedAt) : null,
      }
    });
    const response = CustomReponse.created(todo, 'TODO Creado correctamente')
    res.status(response.statusCode).json(response)
  }
  public async updatedTodos(req: Request, res: Response) {
    try {
      const existingTodo = await this.findTodoById(req.params.id, res);
      if (!existingTodo) return;
      const { text, completedAt } = req.body;
      const todo = await prisma.todo.update({
        where: {id: existingTodo.id},
        data: {
          text: text ?? existingTodo?.text,
          completedAt: completedAt ? new Date(completedAt) : existingTodo?.completedAt,
        }
      })
      const response =  CustomReponse.ok(todo, `Todo con el id ${todo.id} actualizado correctamente`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      CustomError.handleError(error, res);
    }
  }
  public async deleteTodos(req: Request, res: Response) {
    try {
      const todo = await this.findTodoById(req.params.id, res);
      if (!todo) return;
      await prisma.todo.delete({where: {id: todo.id}})
      const response =  CustomReponse.ok(null, `Todo con el id ${todo.id} eliminado correctamente`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      CustomError.handleError(error, res)
    }
  }
}