import { useDispatch } from 'react-redux';
import React from 'react';
import { applicationIncrement, applicationDecrement } from './CounterActions';

export function CounterContainer() {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(applicationIncrement());
    };

    const decrement = () => {
        dispatch(applicationDecrement());
    };

    return (
        <div>
            <div>Count:  </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
