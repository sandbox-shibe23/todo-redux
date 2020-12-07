import React from 'react';
import { useTypedSelector } from '../../../AppicationStore';
import { useDispatch } from 'react-redux';
import { Task, taskSelector, taskSlice } from '../TaskSlices';

const { taskEdited } = taskSlice.actions;

export function TaskListContainer() {
    const tasks = useTypedSelector((state) => state.tasks);
    const allTasks = taskSelector.selectAll(tasks);
    const dispatch = useDispatch();

    const [editTaskID, setEditTaskID] = React.useState<number | null>(null);

    const handleClick = (taskID: number) => {
        if (taskID === editTaskID) {
            setEditTaskID(null);
        } else {
            setEditTaskID(taskID);
        }
    };
    return (
        <div>
            {allTasks.map((task) => {
                return (
                    <div key={task.taskID}>
                        <span>{task.text}</span>
                        <EditButton
                            task={task}
                            editTaskID={editTaskID}
                            handleClick={handleClick}
                        />
                    </div>
                );
            })}
        </div>
    );
}

interface EditButtonProps {
    task: Task;
    editTaskID: number | null;
    handleClick: (task: number) => void;
}

function EditButton(props: EditButtonProps) {
    const { task, editTaskID, handleClick } = props;
    return (
        <>
            <button type="button" onClick={() => handleClick(task.taskID)}>
                {editTaskID === task.taskID ? '決定' : '編集'}
            </button>
        </>
    );
}
