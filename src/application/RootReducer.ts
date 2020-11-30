import { combineReducers } from 'redux';
import { CounterReducer } from './feature/Counter/CounterReducers';
import { NewTaskReducer } from './feature/NewTask/NewTaskReducers';

export const RootReducer = combineReducers({
    counter: CounterReducer,
    newTask: NewTaskReducer,
});
