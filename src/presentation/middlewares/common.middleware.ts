import { Application, json, urlencoded } from "express";

export class CommonMiddlewares {
  static apply (app: Application){
    app.use(json());
    app.use(urlencoded({ extended:true }))
  }
}