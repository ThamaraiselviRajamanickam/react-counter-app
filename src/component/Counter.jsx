import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="counter-container">
        <h1 className="counter-title">Counter</h1>
        <div className="counter-display">{count}</div>
        <div className="counter-buttons">
          <button className="button" onClick={decrement}>-</button>
          <button className="button" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
