// We're gonna destructure props in a functional component
import React from 'react'

// We can destructure in the function parameter itself
/*
const Greet = ({name, heroName}) => {

  return(
    <div>
     <h1>Hello {name} aka {heroName}</h1>
    </div>
  )
}
*/

// we can also destructure in the function body
const Greet = (props) => {
  const {name, heroName} = props;

  return(
    <div>
     <h1>Hello {name} a.k.a. {heroName}</h1>
    </div>
  )
}

export default Greet
