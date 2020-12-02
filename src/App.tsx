import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterContainer } from './application/feature/Counter/components/CounterContainer';
import { AddTaskContainer } from './application/feature/Task/components/AddTaskContainer';
import {TaskListContainer} from "./application/feature/Task/components/TaskListContainer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <CounterContainer />
                <AddTaskContainer />
                <TaskListContainer />
            </header>
        </div>
    );
}

export default App;
