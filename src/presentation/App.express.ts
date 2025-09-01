import express from 'express'
import { todosData } from '../data/index.ts';
interface OptionsServerExpress {
  port: number;
  
}
export class AppExpress {
  private readonly app = express();
  private readonly port: number;
  constructor(options: OptionsServerExpress) {
    const { port } = options;
    this.port = port;
  }

  async start() {
    // middlewares

    // routes

    this.app.get('/api/todos', (_req, res) => {
      res.status(200).json(todosData)
    })

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}