import { useState } from "react"

export const useCounter = ( inicialState = 10 ) => {
    const [counter, setCounter] = useState( inicialState );

    const increment = (  ) => {
        setCounter( x => x + 1 );
    }

    const decrement = (  ) => {
        setCounter( x => x - 1);
    }

    const reset = () => {
        setCounter( inicialState );
    }

    return {
        counter, 
        increment, 
        decrement,
        reset
    };
}
