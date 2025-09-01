import { AppExpress, AppRoutes } from "./presentation/index.ts";
import { envsAdapter } from "./adapters/index.ts";

(async () => {
  await main();
})()

async function main() {
  
  new AppExpress({
     port: envsAdapter.PORT,
     routes: AppRoutes.routes 
   }).start();
}