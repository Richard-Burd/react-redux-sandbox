import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import WithAndWithoutJSX from './components/WithAndWithoutJSX';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div>
        <Greet name="Bruce" heroName="Batman">
        <div>
          <p>This is children props</p>
        </div>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>
        <WithAndWithoutJSX />
        <Message />
      </div>
    );
  }
}

export default App;
