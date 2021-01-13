import { useDispatch } from 'react-redux';
import React from 'react';
import { Task, taskSlice } from '../TaskSlices';

const { taskAdded } = taskSlice.actions;

// テストのため公開
export function buildAddTaskPayload(id: number, text: string): Task {
  return {
    taskID: id,
    text: text,
    status: 'ready',
    isEditable: false,
  };
}

export function AddTaskContainer(): React.ReactElement {
  const dispatch = useDispatch();
  const ref = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (ref.current !== null && ref.current.value) {
      dispatch(
        taskAdded(
          buildAddTaskPayload(
            Math.floor(Math.random() * 10000000),
            ref.current.value,
          ),
        ),
      );
      ref.current.value = '';
    }
  };

  return <AddTask handleClick={handleClick} inputRef={ref} />;
}

// テストのため公開
interface AddTaskProps {
  handleClick: () => void;
  inputRef: React.RefObject<HTMLInputElement>
}

export function AddTask(props: AddTaskProps): React.ReactElement {
  const { handleClick, inputRef } = props;
  return (
    <div>
      <label>
        New Task: <input name="newTask" type="text" ref={inputRef} />
      </label>
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
