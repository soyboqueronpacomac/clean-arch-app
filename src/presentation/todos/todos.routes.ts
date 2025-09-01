import { Router } from "express";
import { TodosController } from "./todos.controller";

export class TodosRoutes {
  static get routes(): Router {
    const routes = Router();
    const todosController = new TodosController();
    // Definir las rutas relacionadas con "todos" aquí
    routes.get('/', todosController.getTodos);
    return routes;
  }
}