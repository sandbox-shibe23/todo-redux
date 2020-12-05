import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction<string>(
    'application/addTask',
);
export const showEditInput = createAction<number>(
    'application/showEditInput',
);
