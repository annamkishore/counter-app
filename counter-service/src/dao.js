import {MongoClient} from "mongodb";
import {APP_CONFIG} from "./config.js";

const url = APP_CONFIG.mongo_url
const client = new MongoClient(url, {serverSelectionTimeoutMS: 3000})

let crud = {
  insert: {name: "c1", count: 0},
  filter: {name: "c1"}
}

//-----------------------------DB calls-----------------------------

export async function checkDBConnection() {
  try {
    await client.connect();
    return client.topology.isConnected()
  } catch (error) {
    console.log("DB Connection error: ", error)
    return client.topology.isConnected()
  } finally {
    await client.close();
  }
}

async function update(byValue) {
  try {
    await client.connect()
    let db = await client.db('counterdb')
    let coll = await db.collection("counter")
    if (byValue) {
      await coll.updateOne(crud.filter, {$inc: {count: byValue}})
    }

    let result = (await (await coll.find(crud.filter)).toArray())[0].count
    console.log(`updateBy: ${byValue}, Result: ${result}`)
    return result
  } catch (error) {
    console.error('Error while connecting: ', error)
  } finally {
    // client.close()
  }
}

//-----------------------------DB calls wrapped-----------------------------
async function increment() {
  return await update(1)
}

async function decrement() {
  return await update(-1)
}

async function current() {
  return await update(0)
}

export {increment, decrement, current}

// (async function () {
//     let val1 = await increment()
//     let val2 = await increment()
//     console.log(val1)
// })()
