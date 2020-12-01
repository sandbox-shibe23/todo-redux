import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction<string>(
    'application/addTask',
);
