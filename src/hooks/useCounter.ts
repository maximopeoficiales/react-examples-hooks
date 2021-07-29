import { useState } from "react"

export const useCounter = (numberInitial: number = 200) => {
    const [counter, setCounter] = useState(numberInitial);

    const increment = (factor: number = 1) => {
        if (counter <= 0) {
            setCounter(numberInitial)
        } else {
            setCounter(counter + factor)
        }
    }
    const decrement = (factor: number = 1) => {
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
