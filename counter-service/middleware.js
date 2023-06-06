import * as db from "./db.js";

//-----------------------------REST middleware-----------------------------

const increment = async ctx => {
    console.log("incr")
    ctx.body = await db.increment()
}
const decrement =  async ctx => {
    console.log("decr")
    ctx.body = await db.decrement()
}

const current = async ctx => {
    console.log("current")
    ctx.body = await db.current()
}

export {increment, decrement, current}
