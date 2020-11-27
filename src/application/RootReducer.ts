import { combineReducers } from 'redux';
import { CounterReducer } from './feature/CounterReducers';

export const RootReducer = combineReducers({
    counter: CounterReducer,
});
