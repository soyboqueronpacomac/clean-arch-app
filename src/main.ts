import { AppExpress, AppRoutes } from "./presentation";
import { envsAdapter } from "./adapters";

(async () => {
  await main();
})()

async function main() {
  
  new AppExpress({
     port: envsAdapter.PORT,
     routes: AppRoutes.routes 
   }).start();
}