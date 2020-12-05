import {createReducer} from "@reduxjs/toolkit";
import {addTask, showEditInput} from "../../actions/TaskActions";
import {createSelectorHook} from "react-redux";

interface Task {
    id: number,
    text: string,
    status : 'ready' | 'done',
    isEditable : boolean
}

const initialState: Task[] = []

export const TaskReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (draft, action) => {
            if (action.payload !== null) {
                draft.push({
                    id: draft.length + 1,
                    text: action.payload,
                    status: 'ready',
                    isEditable: false
                })
            }
        })
        .addCase(showEditInput, (draft, action) => {
            if (action.payload !== null) {
                const task = draft.filter(x => {
                    return x.id === action.payload
                })
                // TODO: task全体と編集後のtaskをマージする
            }
    })
})

export const useCounterSelector = createSelectorHook();
