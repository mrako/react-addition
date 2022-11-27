import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

function App() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();

  return (
    <div>
      <input />
      <span>+</span>
      <input />

      <span>=</span>
      <span></span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
