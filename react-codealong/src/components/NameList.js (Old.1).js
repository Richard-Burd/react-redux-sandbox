import React from 'react'

function NameList() {
  const names = ['Bob', 'Cat', 'Dog']
  const newNames = names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {
        newNames
      }
    </div>
  )
}

export default NameList
