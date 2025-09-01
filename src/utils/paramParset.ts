import { Response } from "express";
import { CustomError } from "../domain/errors/custom.error";

export class ParamParse {
  static parseNumber(param: string, res: Response, paramName= "id") : number | null {
    const value = Number(param);
    if (isNaN(value)) {
      const error = CustomError.badRequest(`Invalid ${paramName} parameter`);
      res.status(error.statusCode).json(error);
      return null;
    }
    return value;
  }
}