import React from 'react';
import './App.css';
import PersonRenderer from './components/PersonRenderer'
import Locations from './components/Locations'
import Dog from './components/Dog'

function App() {
  return (
    <div className="App">
      <PersonRenderer />
      <Locations />
      <Dog />
    </div>
  );
}

export default App;
