import {decremented, incremented} from "./Counter";
import { useDispatch} from "react-redux";
import React from "react";

function increment(){
    const dispatch = useDispatch()
}
function decrement(){
}

export function CounterContainer () {
    return (
        <div>
            <div>Count:</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
