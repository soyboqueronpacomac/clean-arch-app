import { Router } from "express";
import { TodosController } from "./todos.controller";

export class TodosRoutes {
  static get routes(): Router {
    const routes = Router();
    const todosController = new TodosController();
    // Definir las rutas relacionadas con "todos" aquí
    routes.get('/', todosController.getTodos);
    routes.get('/:id', todosController.getTodoById.bind(todosController));
    routes.post('/', todosController.createTodo);
    routes.put('/:id', todosController.updatedTodos.bind(todosController));
    routes.delete('/:id', todosController.deleteTodos.bind(todosController));
    return routes;
  }
}