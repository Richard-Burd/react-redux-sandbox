// This is a codealong tutorial of react-redux-thunk
// https://www.youtube.com/watch?v=WRk0nT8ps6w

// this is a hook that allows us to define some state:
// import React, {useState} from 'react';
// with redux working I don't need the line above

import React from 'react';
import { connect } from 'react-redux'; // this is a higher order component

import { incrementCountAction } from '../redux/codyAppFiles/actions/actions'
                   // we're now using mapDispatchToProps when we erase 'dispatch'
function CodyApp({ /*dispatch*/ incrementMyCount, myCount}) {
  // first variable is the actual state variable (count)
  // second variable is a value you can use to modify the state (setCount)
  // const [count, setCount] = useState(5) //5 is the initial state value
  // with redux working I don't need the line above

  // console.log(dispatch);
  return (
    <div className="CodyApp">
      {/* set anonymous function to 2nd useState variable to execute modification */}
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}

      {/* with redux working, this will display the default initial state value */}
      {/* <button onClick={() => null}>{myCount}</button> */}

      {/*
      <button onClick={() => dispatch({
        type: 'INCREMENT_COUNT'
      })}>{myCount}</button>
      */}

      {/* now let's implement  */}
      {/*
      <button
        onClick={() => dispatch(incrementCountAction())}
      >
        {myCount}
      </button>
      */}

      {/* now let's implement mapDispatchToProps and use it */}
      <button
        onClick={incrementMyCount}
      >
        {myCount}
      </button>
    </div>
  );
}

//const mapStateToProps = (state) => {
//  return {
//    counter: state.count
//  }
//}

//// Let's make this cleaner with ES6 style functions:
//const mapStateToProps = (state) => ({
//    myCount: state.count
//});

//export default connect(mapStateToProps)(CodyApp);

// We're calling dispatch too many times above in the return statement of the
// codyApp function...so let's implement mapDispatchToProps:

const mapStateToProps = (state) => ({
    myCount: state.count
});

const mapDispatchToProps = {
  incrementMyCount: incrementCountAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CodyApp)
