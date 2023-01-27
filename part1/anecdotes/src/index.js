import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({ heading }) => <h2>{heading}</h2>

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length)); 

  const randomNum = Math.floor(Math.random() * anecdotes.length);
  const mostVotes = points.indexOf(Math.max(...points));
  const copy = [...points];

  const handleSelected = () => {
    setSelected(randomNum)
  }
  
  const handleCopy = () => {
    copy[selected] += 1;
    setPoints(copy);
  }

  return (
    <div>
      <Heading heading='Anecdote of the day' />
      {props.anecdotes[selected]}
      <p>has {points[selected]} points </p>
      <Button handleClick={handleCopy} text="vote"/>
      <Button handleClick={handleSelected} text="next"/>
      <Heading heading='Anecdote with most votes' />
      {anecdotes[mostVotes]}
      
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)