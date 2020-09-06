import React from 'react';
import './App.css';
import './style/main.scss';
import TranslateContainer from './component/TranslateContainer';

function App() {
  return (
    <div className="App">

        <h2>Enter a word to translate it into different languages!</h2>
        <p>Select the word's language, the result language and click in the button</p>
        <TranslateContainer />
    </div>
  );
}

export default App;
