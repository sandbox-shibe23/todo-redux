import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from './RootReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export type ApplicationState = ReturnType<typeof RootReducer>;
export const useTypedSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export const store = configureStore({
    reducer: RootReducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
