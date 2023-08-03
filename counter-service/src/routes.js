import Router from "koa-router";
import {current, decrement, increment} from "./middleware.js";

export function getRoutes() {
  let router = new Router()
  router
    .get("/increment", increment)
    .get("/decrement", decrement)
    .get("/current", current)

  return router.routes()
}
