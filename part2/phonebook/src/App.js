import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: 1344223 }
  ]) 
  const [ newPerson, setNewPerson ] = useState([{name:'', number: ''}])

  const addName= (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`)
    }
    else {
    const nameObject = {
      name: newPerson.name,
      number: newPerson.number
    }
    setPersons(persons.concat(nameObject))
    setNewPerson({name:'', number:''})
  }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPerson({ ...newPerson, [name]: value });
  };


  const renderPersons = persons.map(
    (element, i)=>{
        return( 
          <div key={i}>{element.name} {element.number}</div>
        )
    }
)
  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input /></div>
      <form onSubmit={addName}>
        <div>
          name: <input type="text" name="name" value={newPerson.name} onChange={handleChange}/>
        </div>
        <div>number: <input type="number" name="number" value={newPerson.number} onChange={handleChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {renderPersons}
      

    </div>
  )
}

export default App
