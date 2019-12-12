import React from 'react';
import logo from './logo.svg';
import pinImg from './16.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <p className="pop-name">Ticle</p>
      <div className="todo-container">
        <div className="todo-item">
          <div className="pin-icon">
            <img src={pinImg} alt="pin" />
          </div>
          <p className="name">Architecture Draft</p>
          <div className="devider" />
          <p className="load">0.3</p>
        </div>
        <div className="todo-item indent-1">
          <div className="pin-icon">
            <img src={pinImg} alt="pin" />
          </div>
          <p className="name">Task 1</p>
          <div className="devider hidden" />
          <p className="load" />
        </div>
        <div className="todo-item completed">
          <div className="pin-icon">
            <img src={pinImg} alt="pin" />
          </div>
          <p className="name">Design</p>
          <div className="devider" />
          <p className="load">0.4</p>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
