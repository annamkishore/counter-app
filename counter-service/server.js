import Koa from "koa"
import Router from "koa-router"
import cors from "@koa/cors"

import {increment, decrement, current} from "./middleware.js";

function main() {
    let app = new Koa()
    app.use(cors())
    app.use(getRoutes())
    app.listen(4001, () => {
        console.log("started..")
    })
}

function getRoutes() {
    let router = new Router()
    router.get("/increment", increment)
    router.get("/decrement", decrement)
    router.get("/current", current)

    return router.routes()
}

main()
