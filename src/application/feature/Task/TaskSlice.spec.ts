import {taskSlice} from "./TaskSlices";

const {taskAdded, taskEdited, taskDeleted} = taskSlice.actions

test('Create Action - task/taskAdded', async () => {
  const addTask = taskAdded({
    taskID: 1,
    text: "test",
    status: 'ready',
    isEditable: false
  })
  expect(addTask).toStrictEqual({
    payload: {
      taskID: 1,
      text: "test",
      status: 'ready',
      isEditable: false
    },
    type: 'task/taskAdded'
  });
});

test('Create Action - task/taskEdited', async () => {
  const editTask = taskEdited({
        id: 1,
        changes: { text: 'Changed Text.' }
  })
  expect(editTask).toStrictEqual({
    payload: {
      id: 1,
      changes: { text: 'Changed Text.' }
    },
    type: 'task/taskEdited'
  });
});

test('Create Action - task/taskDeleted', async () => {
  const entityId = 1
  const deleteTask = taskDeleted(entityId)
  expect(deleteTask).toStrictEqual({
    payload: 1,
    type: 'task/taskDeleted'
  });
});
