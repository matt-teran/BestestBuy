import React from 'react';
import propTypes from 'prop-types';
import './Modal.scss';

/**
 * This component should be rendered next to <Modal></Modal>
 * @param {boolean} showModal
 * This value determines whether the backdrop is rendered.
 * Handle this value in the state of the component where this backdrop is being rendered.
 * @param {function} clickHandler
 * This clickHandler is intended to reference a function that sets the showModal state to false.
 * This will close the modal if the backdrop is clicked.
 * @returns React Component
 */

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
