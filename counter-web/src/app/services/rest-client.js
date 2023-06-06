
import axios from "axios"

let urlPrefix = "http://localhost:4001"

let urlMap = {
    increment: `${urlPrefix}/increment`,
    decrement: `${urlPrefix}/decrement`,
    current: `${urlPrefix}/current`
}

let increment = async () => {
    let response = await axios.get(urlMap.increment)
    console.log("increment", response.data)
    return response.data
}

let decrement = async () => {
    let response = await axios.get(urlMap.decrement)
    console.log("decrement", response.data)
    return response.data
}

let current = async () => {
    let response = await axios.get(urlMap.current)
    console.log("current", response.data)
    return response.data
}

export {increment, decrement, current}