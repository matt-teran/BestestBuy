import propTypes from 'prop-types';
import React from 'react';
import './Modal.scss';

/**
 * This component should be rendered next to <Backdrop />
 * @param {boolean} showmodal
 * This value determines whether the modal is rendered.
 * Handle this value in the state of the component where this modal is being rendered.
 * @param {node} children
 * Children is defined as whatever is wrapped by this modal component.
 * example: <Modal>[children]</Modal>
 * @returns React Component
 */
function Modal({ showModal, children }) {
  return (
    <div className={showModal ? 'modal' : 'modal closed'}>
      { children }
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  showModal: propTypes.bool.isRequired,
  children: propTypes.node.isRequired,
};
