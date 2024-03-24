import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1) / all;
  const positive = (good / all) * 100;
  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{isNaN(average) ? 0 : average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{isNaN(positive) ? 0 : positive} %</td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;
