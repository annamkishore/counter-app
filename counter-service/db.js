import {MongoClient} from "mongodb";

// const url = "mongodb://10.152.183.49:27017"
const url = process.env.mongo_url
console.log("mongo url 1: ", url)
const client = new MongoClient(url)

let crud = {
    insert: {name: "c1", count:0},
    filter: {name: "c1"}
}

async function update(count) {
    try {
        client.connect()
        let db = await client.db('counterdb')
        let coll = await db.collection("counter")
        if(count) {
            console.log(`update: ${count}`)
            await coll.updateOne(crud.filter, {$inc: {count}})
        }

        return (await (await coll.find(crud.filter)).toArray())[0].count
    }catch (error) {
        console.error('Error while connecting: ', error)
    }finally {
        // client.close()
    }
}

//-----------------------------DB calls exposed-----------------------------
async function increment() {
    return await update(1)
}
async function decrement() {
    return await update(-1)
}
async function current() {
    return await update()
}

export {increment, decrement, current}

// (async function () {
//     let val1 = await increment()
//     let val2 = await increment()
//     console.log(val1)
// })()
