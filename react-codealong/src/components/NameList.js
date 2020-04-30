import React from 'react'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana']
  /*
  const persons = [
    {
      id: 1,
      name: 'Bob',
      age: 17,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Cat',
      age: 43,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Dan',
      age: 12,
      skill: 'Redux'
    }
  ]
  */
  const nameList = names.map((name, index) => <h2 key={index}>{index}-{name}</h2>)
  return <div>{nameList}</div>
}

export default NameList
