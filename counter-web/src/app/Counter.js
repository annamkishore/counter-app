"use client"
import {useState} from "react";
import {Button} from "antd";

function useCounter(initialValue) {
    let [count, setCount] = useState(initialValue)
    const increment = async () => {
        setCount(++count)
    }
    const decrement = async () => {
        setCount(--count)
    }

    return [count, increment, decrement]
}

export default function CounterComponent() {
    let [count, increment, decrement] = useCounter(0)

    return <div style={{position: "fixed", left: "50%"}}>
        <Button onClick={increment}>Increment</Button>
        <h1 style={{textAlign: "center"}}>{count}</h1>
        <Button onClick={decrement}>Decrement</Button>
    </div>
}
