// Lesson 38 & 39 (https://www.youtube.com/watch?v=lTjQjWemKgE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=39)
// This workspace concearns "Context" which is an API that allows you to pass props from
// a grand parent to grand child without passing it to the intermediary generation
// Implementing context has 3 steps:
// 1.) create the context
// 2.) provide a context value
// 3.) consume the context value
import React, { Component } from 'react';
import './App.css';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
// import Greet from './components/Greet';

// These two go together:
import DataFetching from './components/DataFetching';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataFetching />
        {/* Here we are completing step 2 above - providing a context value */}
        {/* <UserProvider value={["Vishwas", "Teacher"]}> */}
        {/*   <ComponentC /> */}
        {/* </UserProvider> */}
        {/* <Greet name="Bruce" heroName="Batman"> */}
        {/*   <div>
        {/*     <p>These are children of the Greet component</p> */}
        {/*     <div> */}
        {/*       <p>These are grand-children of the Greet component</p> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </ Greet> */}
      </div>
    );
  }
}

export default App;
