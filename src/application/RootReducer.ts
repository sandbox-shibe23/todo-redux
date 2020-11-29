import { combineReducers } from 'redux';
import { CounterReducer } from './feature/Counter/CounterReducers';

export const RootReducer = combineReducers({
    counter: CounterReducer,
});
