import { Router } from "express";
import { apiRoutes } from "./api/api.routes.ts";

export class AppRoutes {
  static get routes(): Router{
    const routes = Router();
    // Todas las rutas de la app
    routes.use('/api', apiRoutes.routes)
    return routes;
  }
}