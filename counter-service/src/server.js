import Koa from "koa"
import cors from "@koa/cors"

import {getRoutes} from "./routes.js";
import {APP_CONFIG, messageAndExit} from "./config.js";
import {checkDBConnection} from "./dao.js";

async function main() {
  // Boiler plate
  APP_CONFIG.show()
  console.debug = APP_CONFIG.debug ? console.debug : () => {}
  await checkDBConnection() || messageAndExit("DB not connected..")

  // Middleware config
  let app = new Koa()
  app.use(cors())
  app.use(getRoutes())
  app.listen(APP_CONFIG.port, () => {
    console.log("counter-service Started..")
  })
}

main()
