import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(8).fill(0));
  const [maxIndex, setMaxIndex] = useState(-1);
  const generateRandom = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };
  const incrementVote = (id) => {
    setPoints((prev) => {
      const copy = [...points];
      copy[id] += 1;
      return copy;
    });
    findMaxWithIndex();
  };

  const findMaxWithIndex = () => {
    let max = points[0];
    let maxIndex = 0;
    console.log("max function");
    for (let i = 0; i < points.length; i++) {
      if (points[i] > max) {
        max = points[i];
        maxIndex = i;
      }
    }
    setMaxIndex(maxIndex);
    return maxIndex;
  };
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => incrementVote(selected)}>Vote</button>
      <button onClick={generateRandom}>next anecdote</button>
      <div>
        <h2>Anecdote with most votes</h2>
        {maxIndex !== -1 ? (
          <>
            <p>{anecdotes[maxIndex]}</p>
            <p>has {points[selected]} votes</p>
          </>
        ) : (
          <>.....</>
        )}
      </div>
    </div>
  );
};

export default App;
