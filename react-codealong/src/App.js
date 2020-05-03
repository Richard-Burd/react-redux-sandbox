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
