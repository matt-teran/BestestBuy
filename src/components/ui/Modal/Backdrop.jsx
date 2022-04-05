import React from 'react';
import propTypes from 'prop-types';
import './Modal.scss';

function Backdrop({ showModal, clickHandler }) {
  const newLocal = 'modal-overlay closed';
  return (
    <button className={showModal ? 'modal-overlay' : newLocal} onClick={clickHandler} type="button" aria-label="Close Pop Up Menu" />
  );
}

export default Backdrop;

Backdrop.propTypes = {
  showModal: propTypes.bool.isRequired,
  clickHandler: propTypes.func.isRequired,
};
