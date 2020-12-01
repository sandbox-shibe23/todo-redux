import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterContainer } from './application/feature/Counter/components/CounterContainer';
import { TaskContainer } from './application/feature/Task/components/TaskContainer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <CounterContainer />
                <TaskContainer />
            </header>
        </div>
    );
}

export default App;
