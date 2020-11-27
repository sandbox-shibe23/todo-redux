import { configureStore } from '@reduxjs/toolkit';
import {RootReducer} from "./RootReducer";

export const store = configureStore({
    reducer: RootReducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));
