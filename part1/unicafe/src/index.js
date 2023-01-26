import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => (
  <tbody>
      <td>{text}</td>
      <td>{value}</td>
  </tbody>
)

const Statistics = ({good, bad, neutral}) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>statistics are here</p>
      </div>
    )
  }
  const arr = [good, neutral, bad]
  const all = arr.reduce((a, b) => a + b, 0)
  return (
    <div>
    <h2>statistics</h2>
    <table>

    <Statistic text="good" value ={good} />
    <Statistic text="neutral" value ={neutral} />
    <Statistic text="bad" value ={bad} />
    <Statistic text="all" value ={all} />
    <Statistic text="average" value ={all/neutral} />
    <Statistic text="positive" value ={(good/all)*100} />
    </table>
   </div>
 )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => { 
    setGood(good + 1)
  }
  const handleNeutral = () => { 
    setNeutral(neutral + 1)
  }
  const handleBad = () => { 
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad" />
     <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)