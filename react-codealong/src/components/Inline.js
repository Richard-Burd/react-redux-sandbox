// lesson 20
import React from 'react'

const heading = {
  fontSize: '72px', // it's the same as the css name, but camelCased
  color: 'blue',
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Style</h1>
    </div>
  )
}

export default Inline
