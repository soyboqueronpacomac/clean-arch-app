import { Router } from "express";
import { apiRoutes } from "./api/api.routes";
import { envsAdapter } from "../adapters";

export class AppRoutes {
  static get routes(): Router{
    const routes = Router();
    const apiVersion = envsAdapter.API_VERSION
    // Todas las rutas de la app
    routes.use(`/api/${apiVersion}`, apiRoutes.routes)
    return routes;
  }
}