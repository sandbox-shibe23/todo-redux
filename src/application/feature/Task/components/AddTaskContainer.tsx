import { useDispatch } from 'react-redux';
import React from 'react';
import {Task, taskSlice} from '../TaskSlices';

const { taskAdded } = taskSlice.actions;

// テストのため公開
export function buildAddTaskPayload(id:number, text:string): Task{
  return {
    taskID: id,
    text: text,
    status: 'ready',
    isEditable: false,
  }
}

export function AddTaskContainer(): JSX.Element {
  const dispatch = useDispatch();
  const ref = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current !== null && ref.current.value) {
      dispatch(
        taskAdded(buildAddTaskPayload(Math.floor(Math.random() * 10000000), ref.current.value)),
      );
      ref.current.value = '';
    }
  };

  return (
    <div>
      <label>
        New Task: <input name="newTask" type="text" ref={ref} />
      </label>
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
