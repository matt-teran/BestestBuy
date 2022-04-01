import React from 'react';
import PropTypes from 'prop-types';
import './Btn.scss';

function Btn({ char }) {
  return (
    <button className="btn" type="button">{char}</button>
  );
}

export default Btn;

Btn.defaultProps = {
  char: 'X',
};

Btn.propTypes = {
  char: PropTypes.string,
};
