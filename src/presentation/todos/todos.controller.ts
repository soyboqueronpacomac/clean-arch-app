import express from "express";
import type { Request, Response } from "express";
import { todosData } from "../../data/index.ts";

export class TodosController   {
  // DI
  constructor() {}

  public getTodos(_req: Request, res: Response) {
    res.status(200).json({ data: todosData})
  }
}