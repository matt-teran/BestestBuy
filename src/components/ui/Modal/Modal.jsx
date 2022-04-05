import propTypes from 'prop-types';
import React from 'react';
import './Modal.scss';

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
