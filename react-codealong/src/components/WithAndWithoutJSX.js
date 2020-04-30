import React from 'react';

const WithAndWithoutJSXS = () => {
  // Here is a JSX element
  return(
    <div className="a-jsx-component" id="eye-dee">
      <h1>I am made with JSX</h1>
    </div>
  )

  // Here's the same thing without JSX
  // If you comment out the return block above, you'll see it render
  return React.createElement(
    'div',
    {className: "not-a-jsx-component", id: 'eye-dee'},
    React.createElement('h1', null, 'I am made without JSX')
  )

}

export default WithAndWithoutJSXS
