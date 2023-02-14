import React from 'react'

const Persons = ({ filteredPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filteredPersons.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default Persons
