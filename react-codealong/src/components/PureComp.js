// Lesson 26 (https://www.youtube.com/watch?v=YCRuTT31qR0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=26)
// PureComponents
// A pure component implements shouldComponentUpdate with a shallow prop and/or state comparison

// Pure components can give you a performance boost in certain scenarios by preventing unnecessary rerenders

// Pure components implement the shouldComponentUpdate() lifecycle method by performing shallow comparisons
// on the props and state of a component.  If there is no difference, the component is not re-rendered and
// this can provide a performance boost.

// it is a good idea to ensure all child components of a pure component are also pure to avoid unexpected behavior
// NEVER mutate the state with a pure component, always return a new object that reflects the new state.

import React, { PureComponent } from 'react'

class PureComp extends PureComponent { // created with the "rpce" snippet
  static propTypes = {

  }

  render() {
    console.log('Pure Comp Render');
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
