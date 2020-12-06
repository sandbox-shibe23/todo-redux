import { combineReducers } from 'redux';
import { CounterReducer } from './feature/Counter/CounterReducers';
import {taskSlice} from "./feature/Task/TaskSlices";

export const RootReducer = combineReducers({
    counter: CounterReducer,
    tasks: taskSlice.reducer,
});
