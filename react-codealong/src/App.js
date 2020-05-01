import React from 'react';
import './components_for_react_router_deved_tutorial/router.css';
import Nav from './components_for_react_router_deved_tutorial/Nav';
import About from './components_for_react_router_deved_tutorial/About';
import Shop from './components_for_react_router_deved_tutorial/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Shop />
    </div>
  );
}

export default App;
