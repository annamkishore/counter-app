
import axios from "axios"
import {CounterEndpoints} from "@/app/services/rest-endpoints";

let increment = async () => {
  let response = await axios.get(CounterEndpoints.increment)
  console.log("increment", response.data)
  return response.data
}

let decrement = async () => {
  let response = await axios.get(CounterEndpoints.decrement)
  console.log("decrement", response.data)
  return response.data
}

let current = async () => {
  let response = await axios.get(CounterEndpoints.current)
  console.log("current", response.data)
  return response.data
}

export {increment, decrement, current}
