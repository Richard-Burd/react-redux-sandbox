import React from 'react';
import './App.css';
import PersonRenderer from './components/PersonRenderer'
import Locations from './components/Locations'
import Dog from './components/Dog'
import MatrixParent from './components/MatrixParent'

function App() {
  return (
    <div className="App">
      <PersonRenderer />
      <Locations />
      <Dog />
      <MatrixParent />
    </div>
  );
}

export default App;
