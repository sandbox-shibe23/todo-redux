import {createReducer} from "@reduxjs/toolkit";
import {applicationDecrement, applicationIncrement} from "./CounterActions";
import {createSelectorHook} from "react-redux";

const initialState = {
    value: 0
}
export const CounterReducer = createReducer(initialState, builder => {
    builder
        .addCase(applicationIncrement, (draft, action) => {
        draft.value += 1
    })
        .addCase(applicationDecrement, (draft, action) => {
        draft.value -= 1
    })
})

export const useCounterSelector = createSelectorHook();
