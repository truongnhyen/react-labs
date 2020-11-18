import React, { useState } from 'react';
import './Counter.scss';

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleDecreaseClick = () => {
    setCount((x) => x - 1);
  };
  const handleIncreaseClick = () => {
    setCount(
      (x) => x + 1
    ); /*Su dung call back de dam bao lay gia tri state moi nhat, neu state dua vao state cu*/
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <button onClick={handleIncreaseClick}>Increase</button>
    </div>
  );
}

export default Counter;
