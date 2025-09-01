import { Router } from "express";
import { todosData } from "../../data/index.ts";
import { TodosRoutes } from "../todos/todos.routes.ts";

export class apiRoutes {
  static get routes(): Router {
    const routes = Router();
    
    routes.get('/todos', TodosRoutes.routes );
    return routes;
  }
}