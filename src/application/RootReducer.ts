import { combineReducers } from 'redux';
import { CounterReducer } from './feature/Counter/CounterReducers';
import { TaskReducer } from './feature/Task/TaskReducers';

export const RootReducer = combineReducers({
    counter: CounterReducer,
    tasks: TaskReducer,
});
