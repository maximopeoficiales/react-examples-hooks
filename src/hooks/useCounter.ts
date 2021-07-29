import { useState } from "react"

export const useCounter = (numberInitial: number = 200) => {
    const [counter, setCounter] = useState(numberInitial);

    const increment = (factor: number = 2) => {
        setCounter(counter + factor)
    }
    const decrement = (factor: number = 2) => {
        setCounter(counter - factor)
    }

    const reset = () => {
        setCounter(numberInitial);
    }

    return {
        counter,
        increment, decrement, reset
    }
}
