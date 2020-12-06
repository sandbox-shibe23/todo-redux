import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

export interface Task {
    taskID: number,
    text: string,
    status : 'ready' | 'done',
    isEditable : boolean
}
export const taskAdapter = createEntityAdapter<Task>({
    selectId: (task) => task.taskID,
})

export const taskSlice = createSlice({
    name: 'task',
    initialState: taskAdapter.getInitialState(),
    reducers: {
        taskAdded: taskAdapter.addOne,
        taskEdited: taskAdapter.updateOne,
    }
})

export const taskSelector = taskAdapter.getSelectors()

