import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import './BoxList.scss';

BoxList.propTypes = {
  data: PropTypes.array,
  onBoxClick: PropTypes.func,
};

BoxList.defaultProps = {
  data: [],
  onBoxClick: null,
};

function BoxList({ data, onBoxClick }) {
  return (
    <ul className="box-list">
      {data.map((box, idx) => (
        <li key={box.luckyNumber}>
          <Box boxProps={box} onClick={(boxProps) => onBoxClick && onBoxClick(box, idx)}>
            BOX {box.luckyNumber}
          </Box>
        </li>
      ))}
    </ul>
  );
}

export default BoxList;
