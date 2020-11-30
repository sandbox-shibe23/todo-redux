import {createReducer} from "@reduxjs/toolkit";
import {addTask} from "./NewTaskActions";
import {createSelectorHook} from "react-redux";

const initialState = {
    text: ''
}
export const NewTaskReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (draft, action) => {
            if (action.payload.text !== null) {
                draft.text = action.payload.text
            }
            console.log(draft.text)
    })
})

export const useCounterSelector = createSelectorHook();
