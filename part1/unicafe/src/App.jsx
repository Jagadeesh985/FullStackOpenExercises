import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1) / all;
  const positive = (good / all) * 100;
  return (
    <div>
      <Header text="give feedback" />
      <div>
        <Button
          text="good"
          handler={() => {
            setGood((prev) => prev + 1);
          }}
        />
        <Button
          text="neutral"
          handler={() => {
            setNeutral((prev) => prev + 1);
          }}
        />
        <Button
          text="bad"
          handler={() => {
            setBad((prev) => prev + 1);
          }}
        />
      </div>
      <h2>Statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>all {all}</p>
        <p>average {isNaN(average) ? 0 : average}</p>
        <p>positive {isNaN(positive) ? 0 : positive} %</p>
      </div>
    </div>
  );
};

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

export default App;
