import React from "react";

function Course(props) {
  const { name, parts } = props.course;
  return (
    <div>
      <Header name={name} />
      <Parts parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

const Header = ({ name }) => <h2>{name}</h2>;

const Parts = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => {
        return (
          <Part name={part.name} exercises={part.exercises} key={part.id} />
        );
      })}
    </ul>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <li>
      {name} {exercises}
    </li>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return (
    <p>
      <strong>Total of {totalExercises} exercises</strong>
    </p>
  );
};

export default Course;
