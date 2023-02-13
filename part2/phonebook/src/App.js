import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newPerson, setNewPerson ] = useState([{name:'', number: ''}])
  const [filteredPersons, setFilteredPersons] = useState(persons)

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

  const handleFilter = (event) => {
    const filter = event.target.value;
    setFilteredPersons(
      persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    );
  }


  const renderPersons = filteredPersons.map((element, i) => (
    <div key={i}>{element.name} {element.number}</div>
  ));
  
  return ( 
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input onChange={handleFilter}/></div>
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
