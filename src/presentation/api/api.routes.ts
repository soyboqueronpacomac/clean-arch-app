import { Router } from "express";
import { todosData } from "../../data/index.ts";

export class apiRoutes {
  static get routes(): Router {
    const routes = Router();
    routes.get('/todos', (_req, res) => {
      res.status(200).json(todosData)
    })
    return routes;
  }
}