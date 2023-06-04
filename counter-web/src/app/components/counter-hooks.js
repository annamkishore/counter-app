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

export function useCounterService(initialValue) {
    let [count, setCount] = useState()
    useEffect(()=>{
        setCount(preVal=>client.current())
    }, [])

    const increment = async () => {
        setCount(client.increment())
    }
    const decrement = async () => {
        setCount(client.decrement())
    }

    return [count, increment, decrement]
}