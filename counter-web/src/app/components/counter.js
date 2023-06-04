"use client"
import {Button} from "antd";

// import {useCounter} from "./counter-hooks"
import {useCounterService} from "./counter-hooks"

export default function CounterComponent() {
    // let [count, increment, decrement] = useCounter(0)
    let [count, increment, decrement] = useCounterService()

    return <div style={{position: "fixed", left: "50%"}}>
        <Button onClick={increment}>Increment</Button>
        <h1 style={{textAlign: "center"}}>{count}</h1>
        <Button onClick={decrement}>Decrement</Button>
    </div>
}
