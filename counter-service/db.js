import {MongoClient} from "mongodb";

const url = "mongodb://10.152.183.49:27017"
const client = new MongoClient(url)

let crud = {
    insert: {name: "c1", count:0},
    filter: {name: "c1"}
}

async function increment() {
    await update(1)
}
async function decrement() {
    await update(-1)
}

async function current() {
    await update()
}
async function update(count) {
    try {
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
        client.close()
    }
}

export {increment, decrement, current}

(async function () {
    let val = await update(-10)
    console.log(val)
})()
