// Lesson 32 (https://www.youtube.com/watch?v=DNYXgtZBRPE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=32)
// WHen we have an error the whole program crashes...it would be nice to see where in the error tree
// the actual error is occuring.  That's what we're gonn do here!
import React from 'react'

function Hero({heroName}) {
  if(heroName === 'Joker') {
    throw new Error('Not a hero!')
  }

  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
