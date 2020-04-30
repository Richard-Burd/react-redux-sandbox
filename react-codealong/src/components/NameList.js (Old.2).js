// This was saved just before Lesson 19 started changing it.

import React from 'react'
import Person from './Person'

function NameList() {
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

  const personList = persons.map(person => <Person key={person.id} person={person} />)
  return <div>{personList}</div>
}

export default NameList
