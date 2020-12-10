import { useDispatch } from 'react-redux';
import React from 'react';
import { taskSelector, taskSlice } from '../TaskSlices';
import { useTypedSelector } from '../../../AppicationStore';

const { taskAdded } = taskSlice.actions;

export function AddTaskContainer() {
    const dispatch = useDispatch();
    const ref = React.useRef<HTMLInputElement>(null);

    const tasks = useTypedSelector((state) => state.tasks);
    const taskIDs = taskSelector.selectIds(tasks);

    const handleClick = () => {
        if (ref.current !== null && ref.current.value) {
            dispatch(
                taskAdded({
                    taskID: Math.floor(Math.random()*10000000),
                    text: ref.current.value,
                    status: 'ready',
                    isEditable: false,
                }),
            );
            ref.current.value = '';
        }
    };

    return (
        <div>
            <input type="text" ref={ref} />
            <button type="button" onClick={handleClick}>
                Add
            </button>
        </div>
    );
}
