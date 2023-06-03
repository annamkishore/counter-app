
import axios from "axios"

let urlPrefix = "http://localhost:4001"

let urlMap = {
    increment: `${urlPrefix}/increment`,
    decrement: `${urlPrefix}/decrement`
}

let getIncrementVal = async () => {
    return await axios.get(urlMap.increment)
}

let getDecrementVal = async () => {
    return await axios.get(urlMap.decrement)
}

export {getDecrementVal, getIncrementVal}
