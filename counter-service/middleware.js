let counter = 0

const increment = ctx => {
    console.log("incr")
    ctx.body = ++counter
}
const decrement = ctx => {
    console.log("decr")
    ctx.body = --counter
}

export {increment, decrement}
