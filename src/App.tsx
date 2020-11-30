import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterContainer } from './application/feature/Counter/components/CounterContainer';
import { NewTaskContainer } from './application/feature/NewTask/components/NewTaskContainer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <CounterContainer />
                <NewTaskContainer />
            </header>
        </div>
    );
}

export default App;
