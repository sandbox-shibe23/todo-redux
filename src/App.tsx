import React from 'react';
import './App.css';
import { AddTaskContainer } from './application/feature/Task/components/AddTaskContainer';
import { TaskListContainer } from './application/feature/Task/components/TaskListContainer';

function App() {
    return (
        <div className="App">
            <AddTaskContainer />
            <TaskListContainer />
        </div>
    );
}

export default App;
