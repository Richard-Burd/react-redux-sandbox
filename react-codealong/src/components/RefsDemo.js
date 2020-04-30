// Lesson 28 (https://www.youtube.com/watch?v=FXa9mMTKOu8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=28)
// Refs make it possible to access DOM nodes directly within React
// For example, by default, in this case, we want the username input field to be focused.
import React, { Component } from 'react'

class RefsDemo extends Component {       // made with the "rce" snippet
  constructor(props) {                   // made with the "rconst" snippet
    super(props)

    // it is common to put createRef's in the constructor so they can be referenced throughout the component
    this.inputRef = React.createRef()

    // Now let's use callback refs which is a different way of doing stuff.
    this.cbRef = null // cbref is for callback-ref
    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }

  // Let's see what "inputRef" contains...this lifecycle hook will enable us to do that:
  componentDidMount() {
    // Let's comment this out so we can use callback refs instead of this other methodology
    //* // you will see an object called "current"
    //* console.log(this.inputRef);

    //* // this will cause the user to focus on the input field as soon as the page renders
    //* // so they can start typing the input right away.
    //* this.inputRef.current.focus()

    // Now let's use callback refs which is a different way of doing stuff.
    if (this.cbRef) {
      this.cbRef.focus()
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        {/* to make use of createRef(), we make use of the reserved [HTML] "ref" attribute */}
        {/* if the other stuff above wasn't commented out, and if the callback ref crap was gone */}
        {/* the focus would automatically land on this input field */}
        <input type="text" ref={this.inputRef} />

        {/* Because we're using callhback refs, the focus now falls */}
        {/* on this input field as soon as the page renders */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
