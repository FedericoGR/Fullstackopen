import React from 'react';

const Header = (props) => {
  
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => (<Part key={part.id} part={part.name} exercises={part.exercises}/>))}
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    
    return (
      <div>
        <strong>Sum of all exercises: {parts.reduce((sum, part) => {return sum + part.exercises;}, 0)}</strong>
      </div>
    )
  }

  const Course = ({course}) => {
    return (
      <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

export default Course;