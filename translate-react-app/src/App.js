import React from 'react';
import logo from './logo.svg';
import './App.css';
import TranslateContainer from './component/TranslateContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TranslateContainer />
      </header>
    </div>
  );
}

export default App;
