// Lesson 37 (https://www.youtube.com/watch?v=EZil2OTyB4w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=37)
// This concearns Render Props which refers to a technique for sharing code between
// React components using a prop whose value is a function.

import React, { Component } from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import CounterTwo from './components/CounterTwo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
        {/* <ClickCounterTwo /> */}
        {/* <HoverCounterTwo /> */}
        {/* <User render={(isLoggedIn) => isLoggedIn ? "Vishwas" : "Guest"}/> */}
      </div>
    );
  }
}

export default App;
