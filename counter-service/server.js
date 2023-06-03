import Koa from "koa"
import {increment, decrement} from "./middleware.js";
import Router from "koa-router"

function main() {
    let app = new Koa()
    let router = new Router()

    router.get("/increment", increment)
    router.get("/decrement", decrement)

    app.use(router.routes())

    app.listen(4001, () => {
        console.log("started..")
    })
}

main()
