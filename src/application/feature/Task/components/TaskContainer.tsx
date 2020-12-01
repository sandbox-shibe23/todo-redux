import { useDispatch } from 'react-redux';
import React from 'react';
import { addTask } from '../../../actions/TaskActions';

export function TaskContainer() {
    const dispatch = useDispatch();
    const ref = React.useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if(ref.current !== null) {
            dispatch(addTask(ref.current.value));
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
