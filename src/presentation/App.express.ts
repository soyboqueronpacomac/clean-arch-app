import express, { json, Router, urlencoded } from 'express'
import { CommonMiddlewares } from './middlewares/common.middleware';

interface OptionsServerExpress {
  port: number;
  routes: Router;
  
}
export class AppExpress {
  private readonly app = express();
  private readonly port: number;
  private readonly routes: Router;
  constructor(options: OptionsServerExpress) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    // middlewares
    CommonMiddlewares.apply(this.app);

    // routes
    this.app.use(this.routes);

    

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}