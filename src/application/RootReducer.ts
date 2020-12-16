import { combineReducers } from 'redux';
import { taskSlice } from './feature/Task/TaskSlices';

export const RootReducer = combineReducers({
  tasks: taskSlice.reducer,
});
