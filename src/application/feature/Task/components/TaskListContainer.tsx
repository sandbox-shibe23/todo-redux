import React from 'react';
import { useTypedSelector } from '../../../AppicationStore';
import { useDispatch } from 'react-redux';
import { Task, taskSelector, taskSlice } from '../TaskSlices';

const { taskEdited } = taskSlice.actions;

export function TaskListContainer() {
    const tasks = useTypedSelector((state) => state.tasks);
    const allTasks = taskSelector.selectAll(tasks);
    const dispatch = useDispatch();
    const ref = React.useRef<HTMLInputElement>(null);
    const [editTaskID, setEditTaskID] = React.useState<number | null>(null);

    const handleClick = (task: Task) => {
        if (task.taskID === editTaskID) {
            dispatch(
                taskEdited({
                    id: task.taskID,
                    changes: { text: ref.current?.value },
                }),
            );
            setEditTaskID(null);
        } else {
            setEditTaskID(task.taskID);
        }
    };

    return (
        <div>
            {allTasks.map((task) => {
                return (
                    <div key={task.taskID}>
                        {editTaskID === task.taskID ? (
                            <input
                                type="text"
                                ref={ref}
                                defaultValue={task.text}
                            />
                        ) : (
                            <span>{task.text}</span>
                        )}
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
    handleClick: (task: Task) => void;
}

function EditButton(props: EditButtonProps) {
    const { task, editTaskID, handleClick } = props;
    return (
        <>
            <button type="button" onClick={() => handleClick(task)}>
                {editTaskID === task.taskID ? '決定' : '編集'}
            </button>
        </>
    );
}
