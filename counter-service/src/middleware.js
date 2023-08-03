import * as db from "./dao.js";

//-----------------------------REST middleware-----------------------------

const increment = async ctx => {
    console.debug("increment middleware")
    ctx.body = await db.increment()
}
const decrement =  async ctx => {
    console.debug("decrement middleware")
    ctx.body = await db.decrement()
}

const current = async ctx => {
    console.debug("current middleware")
    ctx.body = await db.current()
}

export {increment, decrement, current}
