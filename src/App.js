import React from 'react';
import './App.css';
import Counter from './components/counter/counter'

const App = () => {
  return (
    <div className="App">
      <h1>
        Counter
      </h1>
      <Counter to='100000' />
    </div>
  );
}

export default App;
