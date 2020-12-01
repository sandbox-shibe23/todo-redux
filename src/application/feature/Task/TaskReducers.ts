import {createReducer} from "@reduxjs/toolkit";
import {addTask} from "../../actions/TaskActions";
import {createSelectorHook} from "react-redux";

interface Task {
    id: number,
    text: string,
    status : 'ready' | 'done'
}

const initialState: Task[] = []

export const TaskReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (draft, action) => {
            if (action.payload !== null) {
                draft.push({
                    id: draft.length + 1,
                    text: action.payload,
                    status: 'ready'
                })
            }
    })
})

export const useCounterSelector = createSelectorHook();
