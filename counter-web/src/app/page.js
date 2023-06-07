import Image from 'next/image'
import CounterComponent from "./components/counter";

export default function Home() {
    let urlPrefix = process.env.COUNTER_SERVICE_URL
    let pre1 = process.env.NEXT_PUBLIC_COUNTER_SERVICE_URL
    console.log("page.js from counter: ", urlPrefix, ", ", pre1)

    return <CounterComponent/>
}
