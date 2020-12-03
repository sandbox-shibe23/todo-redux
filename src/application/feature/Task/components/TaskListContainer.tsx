import React from 'react';
import { useTypedSelector } from '../../../AppicationStore';

export function TaskListContainer() {
    // ts-expect-error
    const tasks = useTypedSelector((state) => state.tasks);
    const notDoneTasks = tasks.filter(task => task.status === 'ready')

    return (
        <div>
            {notDoneTasks.map((task) => {
                return (
                    <div key={task.id}>
                        <span>{task.text}</span> :<span>{task.status}</span>
                    </div>
                );
            })}
        </div>
    );
}
