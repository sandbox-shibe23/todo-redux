import { useDispatch } from 'react-redux';
import React from 'react';
import { applicationIncrement, applicationDecrement } from '../CounterActions';
import { useCounterSelector } from '../CounterReducers';

export function CounterContainer() {
    const dispatch = useDispatch();
    const { value } = useCounterSelector((state) => state.counter);

    const increment = () => {
        dispatch(applicationIncrement());
    };

    const decrement = () => {
        dispatch(applicationDecrement());
    };

    return (
        <div>
            <div>Count: {value}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
