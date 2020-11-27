import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {};
const COLOR_LIST = ['deeppink', 'red', 'lightgreen', 'blue'];

function ColorBox(props) {
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((x) => (x + 1) % COLOR_LIST.length);
  };

  return (
    <div className="color-box" style={{ backgroundColor: COLOR_LIST[idx] }} onClick={handleClick}>
      Click me!
    </div>
  );
}

export default ColorBox;
