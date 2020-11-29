import { createAction } from '@reduxjs/toolkit';

export const applicationIncrement = createAction(
    'application/increment',
);
export const applicationDecrement = createAction(
    'application/decrement',
);
