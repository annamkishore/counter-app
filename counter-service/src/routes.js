import Router from "koa-router";
import {current, decrement, increment} from "./middleware.js";
import {APP_CONFIG} from "./config.js";

export function getRoutes() {
  let router = new Router({prefix: APP_CONFIG.basePath})
  router
    .get("/increment", increment)
    .get("/decrement", decrement)
    .get("/current", current)

  return router.routes()
}
