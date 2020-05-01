import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

// To use this, click on the "x" in the upper-right-hand corner of the browser to get
// rid of the standard errors and view the error message defined in the render method
// of the "ErrorBoundary.js file in the components folder of this workspace"
class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
