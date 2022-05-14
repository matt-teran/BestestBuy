import React from 'react';
import PropTypes from 'prop-types';
import './Btn.scss';

/**
 *
 * @param {String} char Character that is rendered inside the button
 * @param {String} className Classes passed down as props
 * @param {Function} clickHandler Function that is invoked on button click
 * @returns {React Component}
 */

function Btn({ char, className, clickHandler }) {
  return (
    <button className={`btn ${className}`} type="button" onClick={clickHandler}>{char}</button>
  );
}
Btn.defaultProps = {
  char: 'X',
  className: '',
  clickHandler: () => {},
};

Btn.propTypes = {
  char: PropTypes.string,
  className: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Btn;
