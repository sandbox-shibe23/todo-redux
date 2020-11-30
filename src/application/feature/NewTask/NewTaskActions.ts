import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction<{text: string | null}>(
    'application/addTask',
);
