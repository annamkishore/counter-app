import {useEffect, useState} from "react";
import * as client from "../services/rest-client"

export function useCounter() {
    let [count, setCount] = useState(0)
    const increment = async () => {
        setCount(++count)
    }
    const decrement = async () => {
        setCount(--count)
    }

    return [count, increment, decrement]
}

export function useCounterService() {
    let [count, setCount] = useState()
    useEffect(()=>{
        client.current().then(setCount)
    }, [])

    const increment = async () => {
        client.increment().then(setCount)
    }
    const decrement = async () => {
        client.decrement().then(setCount)
    }

    return [count, increment, decrement]
}