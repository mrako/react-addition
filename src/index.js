import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function sum(number1, number2) {
  if (number1 && number2) {
    return Number(number1) + Number(number2);
  }

  return 0;
}

function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();

  return (
    <div>
      <input value={number1} onChange={e => setNumber1(e.target.value)} />
      <span>+</span>
      <input value={number2} onChange={e => setNumber2(e.target.value)} />

      <span>=</span>
      <span>{ sum(number1, number2) }</span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
