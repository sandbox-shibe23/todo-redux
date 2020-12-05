import React from 'react';
import { useTypedSelector } from '../../../AppicationStore';
import { showEditInput } from '../../../actions/TaskActions';
import { useDispatch } from 'react-redux';

export function TaskListContainer() {
    // ts-expect-error
    const tasks = useTypedSelector((state) => state.tasks);
    const notDoneTasks = tasks.filter((task) => task.status === 'ready');
    const dispatch = useDispatch();

    const handleClick = (taskID: number) => {
        dispatch(showEditInput(taskID));
    };

    return (
        <div>
            {notDoneTasks.map((task) => {
                return (
                    <div key={task.id}>
                        <span>{task.text}</span> :
                        <button
                            type="button"
                            onClick={() => handleClick(task.id)}
                        >
                            {task.status}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
