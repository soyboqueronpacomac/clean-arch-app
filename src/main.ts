import { AppExpress } from "./presentation/App.express.ts";
import { envsAdapter } from "./adapters/index.ts";

(async () => {
  await main();
})()

async function main() {
  console.log(envsAdapter.PORT);
  new AppExpress({ port: envsAdapter.PORT }).start();
}