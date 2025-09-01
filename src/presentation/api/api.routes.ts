import { Router } from "express";
import { TodosRoutes } from "../todos/todos.routes";

export class apiRoutes {
  static get routes(): Router {
    const routes = Router();
    
    routes.use('/todos', TodosRoutes.routes );
    return routes;
  }
}