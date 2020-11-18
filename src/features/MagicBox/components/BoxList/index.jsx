import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import './BoxList.scss';

BoxList.propTypes = {
  data: PropTypes.array,
};

BoxList.defaultProps = {
  data: [],
};

function BoxList({ data }) {
  return (
    <ul className="box-list">
      {data.map((box) => (
        <li key={box.luckyNumber}>
          <Box boxProps={box} />
        </li>
      ))}
    </ul>
  );
}

export default BoxList;
