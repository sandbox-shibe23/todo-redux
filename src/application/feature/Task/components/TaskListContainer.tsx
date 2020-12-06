import React from 'react';
import { useTypedSelector } from '../../../AppicationStore';
import { showEditInput } from '../../../actions/TaskActions';
import { useDispatch } from 'react-redux';
import { Task, taskSelector, taskSlice } from '../TaskSlices';

const { taskEdited } = taskSlice.actions;

export function TaskListContainer() {
    const tasks = useTypedSelector((state) => state.tasks);
    const allTasks = taskSelector.selectAll(tasks);
    const dispatch = useDispatch();
    const handleClick = () => {};
    return (
        <div>
            {allTasks.map((task) => {
                return (
                    <div key={task.taskID}>
                        <span>{task.text}</span> :
                        <button type="button" onClick={() => handleClick()}>
                            {task.status}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
