let counter = 0

const increment = ctx => {
    console.log("incr")
    ctx.body = ++counter
}
const decrement = ctx => {
    console.log("decr")
    ctx.body = --counter
}

const current = ctx => {
    console.log("current")
    ctx.body = counter
}

export {increment, decrement, current}
